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
      <Link href="https://texts.com/">
        @ Texts.com
      </Link>.
    </Paragraph>
  </Section>
);

export default IntroSection;
