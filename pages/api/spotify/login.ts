import { NextApiRequest, NextApiResponse } from "next";
import { scopes, spotifyApi } from "@/utils/spotify";

const handler = async (_request: NextApiRequest, response: NextApiResponse) => {
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, "nil");
  response.redirect(authorizeURL);
};

export default handler;
