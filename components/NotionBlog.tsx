import React, { useEffect, useState } from "react";
import axios from "axios";

import { makeNotionRenderer } from "@/utils/notion";
import { NotionBlockResponseList } from "@/@types/notion";

import NotionParagraph from "@/components/NotionParagraph";
import NotionQuote from "@/components/NotionQuote";
import NotionNumberedList from "@/components/NotionNumberedList";
import NotionCodeBlock from "@/components/NotionCodeBlock";
import {
  NotionHeading1,
  NotionHeading2,
  NotionHeading3,
} from "@/components/NotionHeading";

const { NotionRenderer } = makeNotionRenderer({
  heading_1: NotionHeading1,
  heading_2: NotionHeading2,
  heading_3: NotionHeading3,
  quote: NotionQuote,
  paragraph: NotionParagraph,
  numbered_list_item: NotionNumberedList,
  code: NotionCodeBlock,
});

const NotionBlog = () => {
  const [blockList, setBlockList] = useState<NotionBlockResponseList>([]);

  useEffect(() => {
    axios.get<NotionBlockResponseList>("/api/blogs/first").then(({ data }) => {
      setBlockList(data);
    });
  }, []);

  return (
    <div className="space-y-4">
      <NotionRenderer blockResponse={blockList} />
    </div>
  );
};

export default NotionBlog;
