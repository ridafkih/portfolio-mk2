import type { NextPage } from "next";

import PageContainer from "@/components/PageContainer";

import MyOpportunities from "@/sections/MyOpportunities";
import AboutMyself from "@/sections/AboutMyself";
import Intro from "@/sections/Intro";
import Blog from "@/sections/Blog";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";

const Home: NextPage = () => {
  return (
    <div className="w-full max-w-[52rem] mx-auto">
      <PageContainer>
        <Intro />
        <AboutMyself />
        <MyOpportunities />
        <Blog />
        <Projects />
        <Footer />
      </PageContainer>
    </div>
  );
};

export default Home;
