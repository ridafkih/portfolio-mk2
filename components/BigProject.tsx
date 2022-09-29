import React, { PropsWithChildren } from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";

import { ArrowRightIcon } from "@radix-ui/react-icons";

type BigProjectsGradientBase = "purple" | "green" | "pink";

interface BigProjectProps {
  inProgress: boolean;
  name: string;
  description: string;
  link: string;
  textGradient: BigProjectsGradientBase;
  containerClassName?: string;
}

const BigProjectContainer: React.FC<
  PropsWithChildren<{
    inProgress: boolean;
    href?: string;
    containerClassName: string;
  }>
> = ({ children, href, containerClassName, inProgress = false }) => {
  if (inProgress || !href)
    return (
      <div
        className={`group block p-6 space-y-4 sm:-mx-6 rounded-md bg-neutral-100 dark:bg-neutral-800 text-white gap-4 after:bg-transparent ${containerClassName}`}
      >
        {children}
      </div>
    );
  return (
    <Link href={href} passHref>
      <a
        target="big_project"
        className={`group block p-6 space-y-4 sm:-mx-6 rounded-md bg-neutral-100 dark:bg-neutral-800 text-white gap-4 after:bg-transparent ${containerClassName}`}
      >
        {children}
      </a>
    </Link>
  );
};

const BigProject: React.VFC<BigProjectProps> = ({
  inProgress,
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
    <BigProjectContainer
      href={link}
      inProgress={inProgress}
      containerClassName={containerClassName}
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
          <span className="font-light">
            {!inProgress ? "Learn more" : "Coming soon..."}
          </span>
          {!inProgress ?? (
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </BigProjectContainer>
  );
};

export default BigProject;
