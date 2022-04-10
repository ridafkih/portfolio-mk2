import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";

import WidthLimiter from "@/components/WidthLimiter";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";

import { NotionBlockList } from "@/@types/notion";

import { makeNotionRenderer } from "@/utils/notion";

const { NotionRenderer } = makeNotionRenderer({
  paragraph: (props) => <p>{props.paragraph?.rich_text[0].plain_text}</p>,
});

const BlogPage: NextPage = () => {
  const [blockList, setBlockList] = useState<NotionBlockList>([]);

  useEffect(() => {
    axios.get<NotionBlockList>("/api/blogs/first").then(({ data }) => {
      setBlockList(data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Blog Example</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-4">
            <NotionRenderer blockResponse={blockList} />
          </div>
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export default BlogPage;
