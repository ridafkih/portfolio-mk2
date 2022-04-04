import React, { useRef } from "react";
import Link from "next/link";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

interface BlogPostProps {
  title: string;
  description: string;
  date: Date;
}

const BlogPost: React.VFC<BlogPostProps> = ({ title, description, date }) => {
  const { current: loadedDate } = useRef<Date>(new Date());

  const getDaysBetweenDates = () => {
    const timeDifference = Math.abs(loadedDate.getTime() - date.getTime());
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <Link href="" passHref>
      <a className="relative block font-light transition-transform after:bg-transparent hover:-translate-y-1">
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

export default BlogPost;
