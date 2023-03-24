import React from "react";
import Link from "next/link";

import Paragraph from "@/atoms/Paragraph";
import Section from "@/atoms/Section";

const AboutMyselfSection = () => (
  <Section title="About Myself 🤘">
    <Paragraph weight="light">
      <strong className="font-semibold">I like to make things</strong>. When
      presented with a challenge I do and learn what it takes to build the
      solution. I like quick iterations and prototype-driven work. I am
      motivated by interesting projects, and I would rather get things done than
      shave a yak. I obsess over the developer experience.
    </Paragraph>
  </Section>
);

export default AboutMyselfSection;
