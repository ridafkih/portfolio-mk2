import { NextApiHandler } from "next";
import { Client as NotionClient } from "@notionhq/client";

import { NotionBlockResponseList } from "@/@types/notion";

const { NOTION_DATABASE_ID, NOTION_TOKEN } = process.env;

const notion = new NotionClient({
  notionVersion: "2022-02-22",
  auth: NOTION_TOKEN,
});

const handler: NextApiHandler<NotionBlockResponseList> = async (
  _request,
  response
) => {
  const database = await notion.databases.query({
    database_id: NOTION_DATABASE_ID!,
  });

  const [{ id: pageId }] = database.results;
  const blocks = await notion.blocks.children.list({ block_id: pageId });

  const populatedBlocks = blocks.results.filter((block) => {
    return !!(block as { type?: string }).type;
  }) as NotionBlockResponseList;

  response.json(populatedBlocks);
};

export default handler;
