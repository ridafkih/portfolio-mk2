import type { NextPage } from "next";
import { useRouter } from "next/router";

import PageContainer from "@/atoms/PageContainer";
import WidthLimiter from "@/atoms/WidthLimiter";

import Handlebars from "@/components/Handlebars";
import Header from "@/components/Header";

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
import { getBlogList } from "@/utils/blog";
import { BlogPost } from "@/@types/blog";
import MetaData from "@/components/MetaData";
import { getCurrentUrl } from "@/utils/url";

interface HomeProps {
  gitHubData: GitHubData[];
  blogData: BlogPost[];
}

const HomePage: NextPage<HomeProps> = ({ gitHubData, blogData }) => {
  const router = useRouter();

  return (
    <>
      <MetaData currentUrl={getCurrentUrl(router.asPath)} />
      <WidthLimiter>
        <Handlebars email="hello@rida.dev" />
        <Header />
        <PageContainer>
          <IntroSection />
          <AboutMyselfSection />
          <TechnologiesSection />
          <MyOpportunitiesSection />
          <ProjectsSection gitHubData={gitHubData} />
          <BigProjectsSection />
          <BlogPreviewSection blogs={blogData.slice(0, 3)} />
          <ContactMeSection email="hello@rida.dev" />
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export async function getStaticProps() {
  const [gitHubData, blogData] = await Promise.all([
    getProjectsFromGitHub("ridafkih"),
    getBlogList(),
  ]);

  return {
    props: { gitHubData, blogData },
    revalidate: 240,
  };
}

export default HomePage;
