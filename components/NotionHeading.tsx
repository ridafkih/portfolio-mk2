import React from "react";

import Heading from "@/atoms/Heading";

import { NotionBlock, NotionBlockComponent } from "@/@types/notion";

export const NotionHeading1: NotionBlockComponent<NotionBlock.HEADING_1> = (
  props
) => {
  return <Heading type="h1">{props.heading_1.rich_text[0].plain_text}</Heading>;
};

export const NotionHeading2: NotionBlockComponent<NotionBlock.HEADING_2> = (
  props
) => {
  return (
    <div className="pt-6">
      <Heading type="h2">{props.heading_2.rich_text[0].plain_text}</Heading>
    </div>
  );
};

export const NotionHeading3: NotionBlockComponent<NotionBlock.HEADING_3> = (
  props
) => {
  return (
    <div className="pt-4">
      <Heading type="h3">{props.heading_3.rich_text[0].plain_text}</Heading>
    </div>
  );
};
