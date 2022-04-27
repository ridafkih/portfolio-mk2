import React from "react";

import ScrawlText from "@/components/ScrawlText";

import { Scrawl } from "@/@types/scrawls";

interface ScrawlSectionProps {
  scrawls: Scrawl[];
}

const ScrawlSection: React.VFC<ScrawlSectionProps> = ({ scrawls }) => {
  const getKey = (content: string, date: string) =>
    `${content}:${new Date(date).getTime()}`;

  return (
    <ul className="space-y-4">
      {scrawls.map(({ text, emoji, date }) => {
        return (
          <ScrawlText
            key={getKey(text, date)}
            date={new Date(date)}
            sentimentEmoji={emoji}
          >
            {text}
          </ScrawlText>
        );
      })}
    </ul>
  );
};

export default ScrawlSection;
