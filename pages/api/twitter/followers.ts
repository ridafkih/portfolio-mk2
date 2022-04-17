import { NextApiHandler } from "next";

import { TwitterFollowerCountResponse } from "@/@types/twitter";
import { getTwitterFollowerCount } from "@/utils/twitter";

const handler: NextApiHandler<TwitterFollowerCountResponse> = async (
  _request,
  response
) => {
  const { TWITTER_USER_ID, TWITTER_BEARER_TOKEN } = process.env;

  const followers = await getTwitterFollowerCount({
    auth: TWITTER_BEARER_TOKEN!,
    id: TWITTER_USER_ID!,
  });

  response.json(followers);
};

export default handler;
