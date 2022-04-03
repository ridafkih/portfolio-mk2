import { NextApiRequest, NextApiResponse } from "next";

import { getSpotifyListeningData } from "@/utils/spotify";

import SpotifyListeningData from "@/@types/SpotifyListeningData";

const handler = async (
  _request: NextApiRequest,
  response: NextApiResponse<SpotifyListeningData>
) => {
  const { SPOTIFY_OAUTH_TOKEN } = process.env;
  if (!SPOTIFY_OAUTH_TOKEN) return response.json({ isPlaying: false });

  const spotifyListeningData = await getSpotifyListeningData(
    SPOTIFY_OAUTH_TOKEN!
  );

  response.json(spotifyListeningData);
};

export default handler;
