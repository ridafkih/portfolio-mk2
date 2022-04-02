import React from "react";

import Section from "@/components/Section";

import projects from "@/configs/projects";
import Project from "@/components/Project";

const Projects: React.VFC = () => {
  return (
    <Section title="My Projects ⌨️">
      {projects.map((props) => {
        return <Project key={props.name} {...props} />;
      })}
    </Section>
  );
};

export default Projects;
