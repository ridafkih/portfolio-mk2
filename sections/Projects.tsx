import React from "react";

import { StarFilledIcon } from "@radix-ui/react-icons";

import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const Projects: React.VFC = () => {
  return (
    <Section title="My Projects ⌨️">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Heading type="h4">Awaitabase</Heading>
          <div className="flex items-center gap-1">
            <StarFilledIcon className="text-yellow-500" />
            <span>3</span>
          </div>
        </div>
        <Paragraph>
          Wait for a database to be available prior to launching subsequent
          commands.
        </Paragraph>
      </div>
    </Section>
  );
};

export default Projects;
