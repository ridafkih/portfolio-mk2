import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";

import WidthLimiter from "@/atoms/WidthLimiter";
import PageContainer from "@/atoms/PageContainer";
import Header from "@/components/Header";

import { NotionBlockResponseList } from "@/@types/notion";

import { makeNotionRenderer } from "@/utils/notion";
import Heading from "@/atoms/Heading";

const { NotionRenderer } = makeNotionRenderer({
  heading_1: (props) => (
    <Heading type="h1">{props.heading_1.rich_text[0].plain_text}</Heading>
  ),
  heading_2: (props) => (
    <Heading type="h2">{props.heading_2.rich_text[0].plain_text}</Heading>
  ),
  paragraph: (props) => <p>{props.paragraph?.rich_text[0].plain_text}</p>,
});

const BlogPage: NextPage = () => {
  const [blockList, setBlockList] = useState<NotionBlockResponseList>([]);

  useEffect(() => {
    axios.get<NotionBlockResponseList>("/api/blogs/first").then(({ data }) => {
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
