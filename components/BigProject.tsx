import React from "react";
import Link from "next/link";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

import { ArrowRightIcon } from "@radix-ui/react-icons";

interface BigProjectProps {
  name: string;
  description: string;
  link: string;
  containerClassName?: string;
}

const BigProject: React.VFC<BigProjectProps> = ({
  name,
  description,
  link,
  containerClassName = "",
}) => {
  return (
    <Link href="" passHref>
      <a
        target="big_project"
        className={`group block p-6 space-y-4 sm:-mx-6 rounded-md bg-neutral-900 text-white gap-4 after:bg-transparent ${containerClassName}`}
      >
        <Heading type="h3">
          <span className="text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text">
            {name}
          </span>
        </Heading>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <Paragraph>{description}</Paragraph>
          <div className="flex items-center justify-end gap-2 -translate-x-1">
            <span className="font-light">Learn more</span>
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BigProject;
