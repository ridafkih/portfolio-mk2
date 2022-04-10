import type { NextPage } from "next";
import Head from "next/head";

import Handlebars from "@/components/Handlebars";
import PageContainer from "@/atoms/PageContainer";
import Header from "@/components/Header";
import WidthLimiter from "@/atoms/WidthLimiter";

import MyOpportunitiesSection from "@/sections/MyOpportunitiesSection";
import AboutMyselfSection from "@/sections/AboutMyselfSection";
import IntroSection from "@/sections/IntroSection";
import BlogPreviewSection from "@/sections/BlogPreviewSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactMeSection from "@/sections/ContactMeSection";
import TechnologiesSection from "@/sections/TechnologiesSection";
import BigProjectsSection from "@/sections/BigProjectsSection";

import { getProjectsFromGitHub } from "@/utils/projects";

import { GitHubData } from "@/@types/github";

interface HomeProps {
  gitHubData: GitHubData[];
}

const HomePage: NextPage<HomeProps> = ({ gitHubData }) => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Software Developer Portfolio</title>
      </Head>
      <WidthLimiter>
        <Handlebars email="hello@rida.dev" />
        <Header />
        <PageContainer>
          <IntroSection />
          <AboutMyselfSection />
          <MyOpportunitiesSection />
          <BlogPreviewSection />
          <ProjectsSection gitHubData={gitHubData} />
          <BigProjectsSection />
          <TechnologiesSection />
          <ContactMeSection />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export async function getStaticProps() {
  const gitHubData = await getProjectsFromGitHub("ridafkih");

  return {
    props: { gitHubData },
    revalidate: 60 * 30,
  };
}

export default HomePage;
