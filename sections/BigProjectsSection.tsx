import React from "react";

import BigProject from "@/components/BigProject";
import Section from "@/components/Section";

const BigProjectsSection: React.VFC = () => {
  return (
    <Section title="My Big Projects 🤯" label="My Big Projects">
      <BigProject
        name="Runes"
        link="https://runes.sh/"
        textGradient="pink"
        description="The better, free-forever password manager."
      />
      <BigProject
        name="Punchcard"
        textGradient="purple"
        link="https://punchcard.so/"
        description="Customer loyalty done wonderfully."
      />
    </Section>
  );
};

export default BigProjectsSection;
