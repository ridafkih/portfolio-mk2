import React from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";
import Section from "@/atoms/Section";
import TwitterCount from "@/components/TwitterCount";

const IntroSection: React.VFC = () => (
  <Section>
    <TwitterCount />
    <Heading type="h1">Hello, I&apos;m Rida F&apos;kih 👋</Heading>
    <Paragraph weight="light">
      I&apos;m a Canadian software developer based in Calgary, Alta., I learned
      to code make my life a little easier. I currently work{" "}
      <Link href="https://techcrunch.com/2021/09/10/maxrewards-banks-3m-to-reveal-best-payment-methods-that-reap-the-most-rewards/">
        @ MaxRewards
      </Link>{" "}
      as a reverse-engineer &amp; fullstack developer.
    </Paragraph>
  </Section>
);

export default IntroSection;
