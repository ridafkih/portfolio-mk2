import { NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/atoms/WidthLimiter";
import PageContainer from "@/atoms/PageContainer";
import Header from "@/components/Header";
import NotionBlog from "@/components/NotionBlog";

const BlogPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Blog Example</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <NotionBlog />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export default BlogPage;
