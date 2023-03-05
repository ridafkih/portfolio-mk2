import { NextApiHandler } from "next";
import axios from "axios";
import type { LocationInformation } from "@/@types/location";

const handler: NextApiHandler<LocationInformation> = async (_request, response) => {
  const { data } = await axios.get<LocationInformation>(
    "https://i.hop.sh/location"
  );

  response.setHeader("Content-Type", "application/json");
  response.send(data);
};

export default handler;
