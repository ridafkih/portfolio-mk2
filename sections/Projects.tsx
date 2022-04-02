import React, { useEffect, useState } from "react";
import axios from "axios";

import Section from "@/components/Section";
import Project from "@/components/Project";

import GitHubData from "@/@types/GitHubData";

const Projects: React.VFC = () => {
  const [gitHubData, setGitHubData] = useState<GitHubData[]>([]);

  useEffect(() => {
    axios
      .get<GitHubData[]>("/api/projects")
      .then(({ data }) => setGitHubData(data));
  }, []);

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
