import React from "react";
import Link from "next/link";

import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";

const AboutMyself = () => (
  <Section title="About Myself">
    <Paragraph>
      I&apos;m Rida F&apos;kih. I am 21 years old, Canadian, and a self-taught
      software developer.
    </Paragraph>
    <Paragraph>
      As a teenager I begun coding in order to cheat on mobile trivia games like{" "}
      <Link href="">HQ Trivia</Link>, which rewarded oney for correctly
      answering trivia questions. Once my passion for development surpassed my
      passion for making mystical internet money: I moved on, and I&apos;ve been
      coding non-stop since.
    </Paragraph>
    <Paragraph>
      I <i>love</i> problem solving. I am excited &amp; driven by the challenge,
      and the feeling of overcoming them has resulted in an unwavering love for
      what I do.
    </Paragraph>
    <Paragraph>
      Over the past 6 years, I&apos;ve learned a lot, and I&apos;ve found myself
      in two amazing opportunities to share my passion with the next generation
      of developers by teaching kids to code—and while I&apos;ve moved on from
      those experiences—I still continue to gain &amp; share knowledge from
      within the developer community.
    </Paragraph>
  </Section>
);

export default AboutMyself;
