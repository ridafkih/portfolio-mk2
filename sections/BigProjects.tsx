import React from "react";

import BigProject from "@/components/BigProject";
import Section from "@/components/Section";

const BigProjects: React.VFC = () => {
  return (
    <Section title="My Big Projects 🤯" label="My Big Projects">
      <BigProject
        name="Runes"
        link="https://runes.sh/"
        description="The better, free-forever password manager."
      />
    </Section>
  );
};

export default BigProjects;
