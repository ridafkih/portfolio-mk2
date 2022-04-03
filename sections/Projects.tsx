import React from "react";

import Section from "@/components/Section";
import Project from "@/components/Project";

import GitHubData from "@/@types/GitHubData";

interface ProjectsProps {
  gitHubData: GitHubData[];
}

const Projects: React.VFC<ProjectsProps> = ({ gitHubData }) => {
  return (
    <Section title="My Projects ⌨️">
      <div className="grid grid-cols-1 gap-8">
        {gitHubData.map((props) => {
          return <Project key={props.name} {...props} />;
        })}
      </div>
    </Section>
  );
};

export default Projects;
