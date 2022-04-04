import React from "react";
import Link from "next/link";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";

const Intro: React.VFC = () => (
  <Section>
    <Heading type="h1">Hello, I&apos;m Rida F&apos;kih 👋</Heading>
    <Paragraph weight="light">
      I&apos;m a Canadian software developer based in Calgary, Alta., I learned
      to code make my life a little easier. I currently work{" "}
      <Link href="">@ MaxRewards</Link> as a reverse-engineer &amp; fullstack
      developer.
    </Paragraph>
  </Section>
);

export default Intro;
