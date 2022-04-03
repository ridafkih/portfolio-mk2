import { spotifyApi } from "@/utils/spotify";
import { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "@supabase/supabase-js";
const databaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { code } = request.query;
  const { body: auth } = await spotifyApi.authorizationCodeGrant(
    code as string
  );

  const { access_token, expires_in } = auth;

  spotifyApi.setAccessToken(access_token);
  const me = await spotifyApi.getMe().catch(() => void 0);

  if (me?.body.id !== process.env.SPOTIFY_USER_ID)
    return response.redirect("/");
  else
    await databaseClient.from("spotify-keys").insert({
      access_token,
      code,
      expires_in,
    });

  response.redirect("/");
};

export default handler;
