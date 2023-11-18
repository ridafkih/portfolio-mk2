import React from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";
import { BlogPost } from "@/@types/blog";

interface BlogListSectionProps {
  blogs: BlogPost[];
}

const BlogListSection: React.VFC<BlogListSectionProps> = ({ blogs }) => {
  const stringToDate = (dateAsString: string) => new Date(dateAsString);

  const parseDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <ul className="flex flex-col gap-2">
      {blogs.map(({ title, description, created, url, movedTo }) => {
        const createdDate = stringToDate(created);
        const oldDate = new Date().getTime() - (1000 * 60 * 60 * 24 * 30);
        const isNew = oldDate <= createdDate.getTime();
        
        return (
          <li
            key={createdDate.getTime().toString()}
            className="relative transition"
          >
            <Link href={movedTo ?? url} passHref>
              <a className="cursor-pointer">
                <div className="px-4 py-4 space-y-2 transition-[background-color] rounded-md sm:-mx-4 dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-neutral-100 bg-neutral-50">
                  {isNew && <div className="p-0.5 px-2 bg-amber-200 text-amber-900 text-xs w-fit rounded-full">
                    New
                  </div>}
                  <time className="block text-xs font-semibold text-neutral-400">
                    {parseDate(stringToDate(created))}
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
