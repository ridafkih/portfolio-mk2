import { NotionBlock, NotionBlockComponent } from "@/@types/notion";
import React from "react";

const NotionQuote: NotionBlockComponent<NotionBlock.QUOTE> = (props) => {
  return (
    <blockquote className="flex items-center italic whitespace-pre-line">
      <div className="self-stretch w-1 py-8 mr-4 bg-neutral-900 dark:bg-neutral-50" />
      {props.quote.rich_text[0].plain_text}
    </blockquote>
  );
};

export default NotionQuote;
