import React from "react";

import Section from "@/components/Section";
import Project from "@/components/Project";

import GitHubData from "@/@types/GitHubData";

interface ProjectsProps {
  gitHubData: GitHubData[];
}

const Projects: React.VFC<ProjectsProps> = ({ gitHubData }) => {
  return (
    <Section title="My Little Projects ⌨️">
      <ul className="grid grid-cols-2 gap-8">
        {gitHubData.map((props) => {
          return <Project key={props.name} {...props} />;
        })}
      </ul>
    </Section>
  );
};

export default Projects;
