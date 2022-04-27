import { NextApiHandler } from "next";

import { BlogPost } from "@/@types/blog";
import { getBlogList } from "@/utils/blog";

const handler: NextApiHandler<BlogPost[]> = async (_request, response) => {
  const pages = await getBlogList();
  response.json(pages);
};

export default handler;
