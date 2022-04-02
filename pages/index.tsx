import type { NextPage } from "next";

import PageContainer from "@/components/PageContainer";

import MyOpportunities from "@/sections/MyOpportunities";
import AboutMyself from "@/sections/AboutMyself";
import Intro from "@/sections/Intro";

const Home: NextPage = () => {
  return (
    <div className="w-full max-w-[52rem] mx-auto">
      <PageContainer>
        <Intro />
        <AboutMyself />
        <MyOpportunities />
      </PageContainer>
    </div>
  );
};

export default Home;
