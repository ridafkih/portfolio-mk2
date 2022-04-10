import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/atoms/WidthLimiter";
import Header from "@/components/Header";
import PageContainer from "@/atoms/PageContainer";

import { getBlogBlocks, getBlogList } from "@/utils/blog";
import NotionBlog from "@/components/NotionBlog";
import { NotionBlockResponseList } from "@/@types/notion";
import Heading from "@/atoms/Heading";

const formatBlogUuid = (uuid: string) => {
  return uuid.replace(
    /([A-z0-9]{8})([A-z0-9]{4})([A-z0-9]{4})([A-z0-9]{4})([A-z0-9])/,
    "$1-$2-$3-$4-$5"
  );
};

interface BlogPageProps {
  blocks: NotionBlockResponseList;
  title: string;
}

const BlogPage: NextPage<BlogPageProps> = ({ blocks, title }) => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Blog</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-12">
            <Heading type="h1">{title}</Heading>
            <NotionBlog blocks={blocks} />
          </div>
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getBlogList();

  return {
    paths: blogs.map(({ url }) => url),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await getBlogList();
  const blog = blogs.find(({ url }) =>
    url.includes(context.params?.blogId as string)
  );

  if (!blog) return { notFound: true };

  const blocks = await getBlogBlocks(blog.id);
  return { props: { blocks, title: blog.title }, revalidate: 10 * 1000 };
};

export default BlogPage;
