import { BlogPost, BlogPostProperties } from "@/@types/blog";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

import { Client as NotionClient } from "@notionhq/client";
import { NotionBlockResponseList } from "@/@types/notion";

const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env;

const notion = new NotionClient({
  notionVersion: "2022-02-22",
  auth: NOTION_TOKEN,
});

export const getBlogBlocks = async (
  pageId: string
): Promise<NotionBlockResponseList> => {
  const database = await notion.databases.query({
    database_id: NOTION_DATABASE_ID!,
  });

  const page = database.results.find(({ id }) => id === pageId);
  if (!page?.id) return [];

  const blocks = await notion.blocks.children.list({ block_id: page?.id });
  const populatedBlocks = blocks.results.filter((block) => {
    return !!(block as { type?: string }).type;
  }) as NotionBlockResponseList;

  return populatedBlocks;
};

export const getBlogList = async (): Promise<BlogPost[]> => {
  const { results } = await notion.databases.query({
    database_id: NOTION_DATABASE_ID!,
  });

  const pages = [];

  for (const page of results) {
    if (!("cover" in page)) continue;
    if (page.object !== "page") continue;

    const properties: BlogPostProperties =
      page.properties as unknown as BlogPostProperties;

    if (properties.Status.select.name !== "Complete") continue;

    pages.push({
      id: page.id,
      cover: {
        url: page.cover?.type === "external" ? page.cover.external.url : "",
      },
      status: properties.Status.select.name,
      created: page.created_time,
      title: properties.Name.title[0]?.plain_text || "Unknown Title",
      description: properties.Description.rich_text[0].plain_text,
      url: `/blog${new URL(page.url).pathname}`.toLowerCase(),
    });
  }

  return pages;
};
