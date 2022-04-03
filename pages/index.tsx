import type { NextPage } from "next";

import Handlebars from "@/components/Handlebars";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";

import MyOpportunities from "@/sections/MyOpportunities";
import AboutMyself from "@/sections/AboutMyself";
import Intro from "@/sections/Intro";
import Blog from "@/sections/Blog";
import Projects from "@/sections/Projects";
import ContactMe from "@/sections/ContactMe";

import { getProjectsFromGitHub } from "@/utils/projects";

import GitHubData from "@/@types/GitHubData";

interface HomeProps {
  gitHubData: GitHubData[];
}

const Home: NextPage<HomeProps> = ({ gitHubData }) => {
  return (
    <div className="w-full max-w-[52rem] mx-auto">
      <Handlebars email="hello@rida.dev" />
      <Header />
      <PageContainer>
        <Intro />
        <AboutMyself />
        <MyOpportunities />
        <Blog />
        <Projects gitHubData={gitHubData} />
        <ContactMe />
      </PageContainer>
    </div>
  );
};

export async function getStaticProps() {
  const gitHubData = await getProjectsFromGitHub("ridafkih");

  return {
    props: { gitHubData },
    revalidate: 60 * 30,
  };
}

export default Home;
