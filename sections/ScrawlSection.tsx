import React from "react";

import scrawls from "@/configs/scrawls";
import Scrawl from "@/components/Scrawl";

const ScrawlSection: React.VFC = () => {
  const getKey = (content: string, date: Date) =>
    `${content}:${date.getTime()}`;

  return (
    <ul className="space-y-4">
      {scrawls.map(({ content, sentimentEmoji, date }) => {
        return (
          <Scrawl
            key={getKey(content, date)}
            date={date}
            sentimentEmoji={sentimentEmoji}
          >
            {content}
          </Scrawl>
        );
      })}
    </ul>
  );
};

export default ScrawlSection;
