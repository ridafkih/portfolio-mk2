import React from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";
import Section from "@/atoms/Section";

const IntroSection: React.VFC = () => (
  <Section>
    <Heading type="h1">Hello, I&apos;m Rida F&apos;kih 👋</Heading>
    <Paragraph weight="light">
      Young full-stack mobile, web, & reverse engineer currently{" "}
      <Link href="https://techcrunch.com/2021/09/10/maxrewards-banks-3m-to-reveal-best-payment-methods-that-reap-the-most-rewards/">
        @ MaxRewards
      </Link>.
    </Paragraph>
  </Section>
);

export default IntroSection;
