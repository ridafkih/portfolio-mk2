import React from "react";

import Paragraph from "@/components/Paragraph";

interface ScrawlProps {
  sentimentEmoji: string;
  date: Date;
}

const Scrawl: React.FC<ScrawlProps> = ({ children, sentimentEmoji, date }) => {
  const getParsedDate = () =>
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      weekday: "short",
      year: "numeric",
    });

  return (
    <li className="flex flex-col-reverse gap-4 py-2 border-b rounded-md sm:px-4 sm:-mx-4">
      <Paragraph>
        <span className="text-xl font-cursive">&quot;{children}&quot;</span>
      </Paragraph>
      <div className="flex items-center justify-end gap-2">
        <time
          className="text-xs text-neutral-500 sm:text-right"
          dateTime={date.toString()}
        >
          {getParsedDate()}
        </time>
        <span className="animate-pulse">{sentimentEmoji}</span>
      </div>
    </li>
  );
};

export default Scrawl;
