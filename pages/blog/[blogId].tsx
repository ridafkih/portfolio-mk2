/* eslint-disable @next/next/no-img-element */
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
import MetaData from "@/components/MetaData";
import { useRouter } from "next/router";
import { getCurrentUrl } from "@/utils/url";
import Handlebars from "@/components/Handlebars";
import { useEffect } from "react";

interface BlogPageProps {
  blocks: NotionBlockResponseList;
  title: string;
  description: string;
  cover?: string;
  movedTo?: string,
}

const BlogPage: NextPage<BlogPageProps> = ({
  blocks,
  title,
  description,
  cover,
  movedTo,
}) => {
  const router = useRouter();

  //  redirect if movedTo
  useEffect(() => {
    if (movedTo)
      router.push(movedTo ?? router.asPath);
  }, [movedTo, router]);

  return (
    <>
      <MetaData
        title={title}
        description={description}
        currentUrl={getCurrentUrl(router.asPath)}
        bannerUrl={cover}
      />
      <WidthLimiter>
        <Handlebars email="hello@rida.dev" />
        <Header />
        <PageContainer>
          <div className="pb-24 space-y-12">
            {cover && (
              <div className="sm:-mx-12">
                <img
                  src={cover}
                  className="object-cover w-full h-[320px] rounded-md object-bottom"
                  height="320"
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
      movedTo: blog.movedTo,
    },
    revalidate: 240,
  };
};

export default BlogPage;
