import { NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/atoms/WidthLimiter";
import Header from "@/components/Header";
import PageContainer from "@/atoms/PageContainer";
import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";

import BlogListSection from "@/sections/BlogListSection";
import { BlogPost } from "@/@types/blog";
import { getBlogList } from "@/utils/blog";
import MetaData from "@/components/MetaData";
import { useRouter } from "next/router";
import { getCurrentUrl } from "@/utils/url";

interface BlogPageProps {
  blogs: BlogPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }) => {
  const router = useRouter();

  return (
    <>
      <MetaData
        title="Rida F'kih — Blog"
        currentUrl={getCurrentUrl(router.asPath)}
      />
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-4">
            <Heading type="h1">My Blog</Heading>
            <Paragraph weight="light">
              A bevy of writing about topics I love.
            </Paragraph>
          </div>
          <BlogListSection blogs={blogs} />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export const getStaticProps = async () => {
  const blogs = await getBlogList();
  return { props: { blogs } };
};

export default BlogPage;
