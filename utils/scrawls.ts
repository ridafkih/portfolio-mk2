import { Scrawl, ScrawlProperties } from "@/@types/scrawls";
import { Client as NotionClient } from "@notionhq/client";

const { NOTION_TOKEN, NOTION_SCRAWLS_DATABASE_ID } = process.env;

const notion = new NotionClient({
  notionVersion: "2022-02-22",
  auth: NOTION_TOKEN,
});

const stringDateToTime = (dateAsString: string) => {
  return new Date(dateAsString).getTime();
};

const sortScrawlsByDate = (scrawls: Scrawl[]) =>
  scrawls.sort((scrawl, reference) => {
    return stringDateToTime(reference.date) - stringDateToTime(scrawl.date);
  });

/**
 * Gets scrawls from the Notion database set to
 * the NOTION_SCRAWLS_DATABASE_ID environment variable.
 * @returns An array of scrawls and their properties.
 */
export const getScrawls = async () => {
  const { results } = await notion.databases.query({
    database_id: NOTION_SCRAWLS_DATABASE_ID!,
  });

  const scrawls: Scrawl[] = [];
  for (const page of results) {
    if (!("properties" in page)) continue;
    const properties = page.properties as unknown as ScrawlProperties;

    scrawls.push({
      text: properties.Scrawl.title[0].plain_text,
      emoji: properties.Emoji.rich_text[0].plain_text,
      date: properties.Date.date.start,
    });
  }

  return sortScrawlsByDate(scrawls);
};
