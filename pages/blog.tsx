import { NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/components/WidthLimiter";
import Header from "@/components/Header";

const BlogPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Blog</title>
      </Head>
      <WidthLimiter>
        <Header />
      </WidthLimiter>
    </>
  );
};

export default BlogPage;
