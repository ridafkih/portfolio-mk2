import { NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/components/WidthLimiter";
import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Scrawl from "@/components/Scrawl";

import ScrawlSection from "@/sections/ScrawlSection";

import scrawls from "@/configs/scrawls";

const ScrawlsPage: NextPage = () => {
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
          <ScrawlSection />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export default ScrawlsPage;
