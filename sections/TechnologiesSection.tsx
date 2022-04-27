import React from "react";

import Section from "@/atoms/Section";
import Technology from "@/components/Technology";

import { technologies } from "@/configs/technologies";

const TechnologiesSection: React.VFC = () => {
  return (
    <Section title="My Favourite Tools 🛠️">
      <ul className="grid w-full grid-flow-col grid-rows-[repeat(13,minmax(0,1fr))] sm:grid-rows-[repeat(9,minmax(0,1fr))] gap-2 md:grid-rows-5">
        {technologies.map((props) => {
          return <Technology key={props.name} {...props} />;
        })}
      </ul>
    </Section>
  );
};

export default TechnologiesSection;
