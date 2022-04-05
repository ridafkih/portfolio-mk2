import type { NextPage } from "next";
import Head from "next/head";

import Handlebars from "@/components/Handlebars";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";

import MyOpportunities from "@/sections/MyOpportunities";
import AboutMyself from "@/sections/AboutMyself";
import Intro from "@/sections/Intro";
import Blog from "@/sections/Blog";
import Projects from "@/sections/Projects";
import ContactMe from "@/sections/ContactMe";
import Technologies from "@/sections/Technologies";
import BigProjects from "@/sections/BigProjects";

import { getProjectsFromGitHub } from "@/utils/projects";

import GitHubData from "@/@types/GitHubData";

interface HomeProps {
  gitHubData: GitHubData[];
}

const HomePage: NextPage<HomeProps> = ({ gitHubData }) => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Software Developer Portfolio</title>
      </Head>
      <div className="w-full max-w-[52rem] mx-auto">
        <Handlebars email="hello@rida.dev" />
        <Header />
        <PageContainer>
          <Intro />
          <AboutMyself />
          <MyOpportunities />
          <Blog />
          <Projects gitHubData={gitHubData} />
          <BigProjects />
          <Technologies />
          <ContactMe />
        </PageContainer>
      </div>
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
