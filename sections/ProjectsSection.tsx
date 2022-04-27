import React from "react";

import Section from "@/atoms/Section";
import Project from "@/components/Project";

import { GitHubData } from "@/@types/github";

interface ProjectsProps {
  gitHubData: GitHubData[];
}

const ProjectsSection: React.VFC<ProjectsProps> = ({ gitHubData }) => {
  return (
    <Section title="My Little Projects ⌨️">
      <ul className="grid gap-8 sm:grid-cols-2">
        {gitHubData.map((props) => {
          return <Project key={props.name} {...props} />;
        })}
      </ul>
    </Section>
  );
};

export default ProjectsSection;
