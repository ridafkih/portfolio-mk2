import { NextApiRequest, NextApiResponse } from "next";

import SpotifyListeningData from "@/@types/SpotifyListeningData";
import { getSpotifyListeningData, spotifyApi } from "@/utils/spotify";

import { createClient } from "@supabase/supabase-js";
const databaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

interface SpotifyKeysDatabaseProps {
  access_token: string;
  code: string;
  expires_in: number;
  created_at: Date;
}

const isTokenExpired = (expires_in: number, created_at: Date) =>
  new Date(created_at).getTime() + expires_in * 1000 <= new Date().getTime();

const handler = async (
  _request: NextApiRequest,
  response: NextApiResponse<SpotifyListeningData>
) => {
  const { body } = await databaseClient
    .from<SpotifyKeysDatabaseProps>("spotify-keys")
    .select("access_token,code,expires_in,created_at")
    .limit(1);

  const [{ access_token, code, expires_in, created_at }] = body || [];

  if (isTokenExpired(expires_in, created_at)) void 0;
  if (!access_token || !code) return response.json({ isPlaying: false });

  const spotifyListeningData = await getSpotifyListeningData(
    access_token
  ).catch((error) => {
    console.error(error);
    return { isPlaying: false };
  });

  response.json(spotifyListeningData);
};

export default handler;
