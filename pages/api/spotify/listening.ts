import { NextApiRequest, NextApiResponse } from "next";

import { SpotifyListeningData } from "@/@types/spotify";

import {
  getSpotifyListeningData,
  refreshSpotifyAccessToken,
} from "@/utils/spotify";

import { createClient } from "@supabase/supabase-js";
const databaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

interface SpotifyKeysDatabaseProps {
  id?: number;
  refresh_token?: string;
  access_token?: string;
  code?: string;
  expires_in?: number;
  created_at?: Date;
}

const isTokenExpired = (expires_in: number, created_at: Date) =>
  new Date(created_at).getTime() + expires_in * 1000 <= new Date().getTime();

const handler = async (
  _request: NextApiRequest,
  response: NextApiResponse<SpotifyListeningData>
) => {
  const { body } = await databaseClient
    .from<SpotifyKeysDatabaseProps>("spotify-keys")
    .select("refresh_token,access_token,code,expires_in,created_at")
    .order("id", { ascending: false })
    .limit(1);

  const [firstSpotifyKey] = body || [];
  let spotifyKey = firstSpotifyKey || {};

  if (
    !spotifyKey.refresh_token ||
    !spotifyKey.access_token ||
    !spotifyKey.expires_in ||
    !spotifyKey.created_at ||
    !spotifyKey.code
  )
    return response.json({ isPlaying: false });

  if (isTokenExpired(spotifyKey.expires_in, spotifyKey.created_at)) {
    spotifyKey = await refreshSpotifyAccessToken(spotifyKey.refresh_token);
  }

  if (!spotifyKey.access_token || !spotifyKey.code)
    return response.json({ isPlaying: false });

  const spotifyListeningData = await getSpotifyListeningData(
    spotifyKey.access_token
  ).catch((error) => {
    console.error(error);
    return { isPlaying: false };
  });

  response.json(spotifyListeningData);
};

export default handler;
