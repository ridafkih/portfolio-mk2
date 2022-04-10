import React from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";

import { ArrowRightIcon } from "@radix-ui/react-icons";

type BigProjectsGradientBase = "purple" | "green" | "pink";

interface BigProjectProps {
  name: string;
  description: string;
  link: string;
  textGradient: BigProjectsGradientBase;
  containerClassName?: string;
}

const BigProject: React.VFC<BigProjectProps> = ({
  name,
  description,
  link,
  textGradient,
  containerClassName = "",
}) => {
  const textGradientMap: Record<BigProjectsGradientBase, string> = {
    green: "from-green-500 to-blue-500",
    pink: "from-pink-500 to-orange-500",
    purple: "from-purple-500 to-blue-500",
  };

  return (
    <Link href={link} passHref>
      <a
        target="big_project"
        className={`group block p-6 space-y-4 sm:-mx-6 rounded-md bg-neutral-100 dark:bg-neutral-800 text-white gap-4 after:bg-transparent ${containerClassName}`}
      >
        <Heading type="h3">
          <span
            className={`text-transparent bg-gradient-to-r bg-clip-text ${textGradientMap[textGradient]}`}
          >
            {name}
          </span>
        </Heading>
        <div className="flex flex-col justify-between gap-4 md:flex-row text-neutral-900 dark:text-neutral-100">
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
