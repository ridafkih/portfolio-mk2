import React from "react";

import { NotionBlockResponse, NotionBlockRendererProps } from "@/@types/notion";

type NotionRendererFactory = (map: NotionBlockRendererProps) => {
  NotionRenderer: React.VFC<NotionRendererProps>;
};

interface NotionRendererProps {
  blockResponse: NotionBlockResponse<string>[];
}

/**
 * Create a notion renderer object.
 * @param map The Notion-local component map.
 * @returns A renderer JSX element.
 */
export const makeNotionRenderer: NotionRendererFactory = (map) => {
  const NotionRenderer = ({ blockResponse }: NotionRendererProps) => {
    const blocks: NotionBlockResponse<keyof typeof map>[] = blockResponse;

    return (
      <>
        {blocks.map((props) => {
          const { type } = props;
          const Block = map[type] as React.VFC<NotionBlockResponse>;
          if (!Block) return void 0;
          return <Block key={props.id} {...props} />;
        })}
      </>
    );
  };

  return { NotionRenderer };
};
