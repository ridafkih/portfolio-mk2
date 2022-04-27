import React, { useRef } from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";

import { BlogPost } from "@/@types/blog";

const BlogPostPreview: React.VFC<BlogPost> = ({
  title,
  description,
  created,
  url,
}) => {
  const { current: loadedDate } = useRef<Date>(new Date());

  const getDaysBetweenDates = () => {
    const timeDifference = Math.abs(
      loadedDate.getTime() - new Date(created).getTime()
    );
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <Link href={url} passHref>
      <a className="relative block font-light transition-transform cursor-pointer after:bg-transparent hover:-translate-y-1">
        <div className="flex items-center p-6 border rounded-md sm:-mx-6 border-neutral-300 dark:border-neutral-700">
          <div className="space-y-2">
            <Heading type="h3">{title}</Heading>
            <Paragraph weight="light">{description}</Paragraph>
          </div>
        </div>
        <time
          className="text-right absolute bottom-0 right-0 px-4 py-2 text-xs transform translate-y-[1rem] bg-neutral-50 dark:bg-neutral-900"
          dateTime={`P${getDaysBetweenDates()}D`}
        >
          {getDaysBetweenDates()} days ago.
        </time>{" "}
      </a>
    </Link>
  );
};

export default BlogPostPreview;
