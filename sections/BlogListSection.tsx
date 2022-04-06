import React from "react";
import Link from "next/link";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

import blogs from "@/configs/blogs";

const BlogListSection: React.VFC = () => {
  const parseDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <ul className="flex flex-col gap-2">
      {blogs.map(({ title, description, date }) => {
        return (
          <li key={date.getTime().toString()} className="relative transition">
            <Link href="/" passHref>
              <a target="blog_post">
                <div className="px-4 py-4 space-y-2 transition-[background-color] rounded-md sm:-mx-4 dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-neutral-100 bg-neutral-50">
                  <div className="p-0.5 px-2 bg-amber-200 text-amber-900 text-xs w-fit rounded-full">
                    New
                  </div>
                  <time className="block text-xs font-semibold text-neutral-400">
                    {parseDate(date)}
                  </time>
                  <div>
                    <Heading type="h3">{title}</Heading>
                    <Paragraph weight="light">
                      <span className="line-clamp-2">{description}</span>
                    </Paragraph>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogListSection;
