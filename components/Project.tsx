import React from "react";

import { StarFilledIcon } from "@radix-ui/react-icons";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

interface ProjectProps {
  name: string;
  description: string;
  stars: number;
}

const Project: React.VFC<ProjectProps> = ({ name, stars, description }) => (
  <li className="space-y-2">
    <div className="flex items-center gap-2">
      <Heading type="h4">{name}</Heading>
      {stars && (
        <div className="flex items-center gap-1">
          <StarFilledIcon className="text-yellow-400" />
          <span>{stars.toString()}</span>
        </div>
      )}
    </div>
    <Paragraph>{description}</Paragraph>
  </li>
);

export default Project;
