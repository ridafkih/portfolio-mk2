import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/atoms/WidthLimiter";
import Header from "@/components/Header";
import PageContainer from "@/atoms/PageContainer";

import { getBlogBlocks, getBlogList } from "@/utils/blog";
import NotionBlog from "@/components/NotionBlog";
import { NotionBlockResponseList } from "@/@types/notion";
import Heading from "@/atoms/Heading";
import Image from "next/image";

const formatBlogUuid = (uuid: string) => {
  return uuid.replace(
    /([A-z0-9]{8})([A-z0-9]{4})([A-z0-9]{4})([A-z0-9]{4})([A-z0-9])/,
    "$1-$2-$3-$4-$5"
  );
};

interface BlogPageProps {
  blocks: NotionBlockResponseList;
  title: string;
  cover?: string;
}

const BlogPage: NextPage<BlogPageProps> = ({ blocks, title, cover }) => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Blog</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-12">
            {cover && (
              <Image
                src={cover}
                className="!w-full !h-full !max-h-36 !object-cover rounded-md"
                height="512"
                width="1200"
                alt=""
              />
            )}
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
  return {
    props: { blocks, title: blog.title, cover: blog.cover.url },
    revalidate: 10 * 1000,
  };
};

export default BlogPage;
