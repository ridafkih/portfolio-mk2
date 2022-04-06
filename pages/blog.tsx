import { NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/components/WidthLimiter";
import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

import BlogListSection from "@/sections/BlogListSection";

const BlogPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Blog</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-4">
            <Heading type="h1">My Blog</Heading>
            <Paragraph weight="light">
              A bevy of writing about topics I love.
            </Paragraph>
          </div>
          <BlogListSection />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export default BlogPage;
