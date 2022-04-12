import { PhotoProperties } from "@/@types/photos";
import { Client as NotionClient } from "@notionhq/client";

const { NOTION_TOKEN, NOTION_PHOTOS_DATABASE_ID } = process.env;

const notion = new NotionClient({
  notionVersion: "2022-02-22",
  auth: NOTION_TOKEN,
});

/**
 * Gets the photos from the Notion database set to
 * the NOTION_PHOTOS_DATABASE_ID environment variable.
 * @returns An array of photos and their properties.
 */
export const getPhotos = async () => {
  const { results } = await notion.databases.query({
    database_id: NOTION_PHOTOS_DATABASE_ID!,
  });

  const photos = [];
  for (const page of results) {
    if (!("properties" in page)) continue;
    const properties = page.properties as unknown as PhotoProperties;

    photos.push({
      url: properties.Image.files[0].file.url,
      caption: properties.Caption.title[0].plain_text,
      date: new Date(properties.Date.date.start),
      expiry: new Date(properties.Image.files[0].file.expiry_time),
    });
  }

  return photos;
};
