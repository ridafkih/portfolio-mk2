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

interface BlogPageProps {
  blocks: NotionBlockResponseList;
  title: string;
  description: string;
  cover?: string;
  url: string;
}

const BlogPage: NextPage<BlogPageProps> = ({
  blocks,
  title,
  description,
  cover,
  url,
}) => {
  const fullUrl = `https://rida.dev${url}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={cover} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={fullUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={cover} />
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="pb-24 space-y-12">
            {cover && (
              <div className="sm:-mx-12">
                <Image
                  src={cover}
                  className="!w-full !h-full !max-h-36 !object-cover rounded-md"
                  height="512"
                  width="1200"
                  alt=""
                />
              </div>
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
    props: {
      blocks,
      title: blog.title,
      cover: blog.cover.url,
      description: blog.description,
      url: blog.url,
    },
    revalidate: 10 * 1000,
  };
};

export default BlogPage;
