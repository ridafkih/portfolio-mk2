import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Paragraph from "@/atoms/Paragraph";
import Heading from "@/atoms/Heading";
import PageContainer from "@/atoms/PageContainer";
import WidthLimiter from "@/atoms/WidthLimiter";
import Header from "@/components/Header";
import ScrawlSection from "@/sections/ScrawlSection";

import { getScrawls } from "@/utils/scrawls";

import { Scrawl } from "@/@types/scrawls";

interface ScrawlsPageProps {
  scrawls: Scrawl[];
}

const ScrawlsPage: NextPage<ScrawlsPageProps> = ({ scrawls }) => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Scrawls</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-4">
            <div>
              <Heading type="h1">
                <i>scrawls</i>
              </Heading>
              <span className="text-sm">/skrôl/</span>
            </div>
            <i className="block text-sm">verb</i>
            <Paragraph weight="light">
              <i>
                &quot;to write (something) in a hurried, careless way.&quot;
              </i>
            </Paragraph>
          </div>
          <ScrawlSection scrawls={scrawls} />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const scrawls = await getScrawls();

  return {
    props: { scrawls },
    revalidate: 5 * 1000,
  };
};

export default ScrawlsPage;
