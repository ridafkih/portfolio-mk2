import { NextApiHandler } from "next";
import axios from "axios";

const handler: NextApiHandler<string> = async (_request, response) => {
  const { data: script } = await axios.get<string>(
    "https://static.ads-twitter.com/uwt.js"
  );

  response.setHeader("Content-Type", "application/json");
  response.send(script);
};

export default handler;
