import React from "react";

import Heading from "@/components/Heading";

interface BlogPostProps {
  title: string;
  description: string;
  date: Date;
}

const BlogPost: React.VFC<BlogPostProps> = ({ title, description, date }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center p-6 -mx-6 border rounded-md border-neutral-300">
        <div className="space-y-2">
          <Heading type="h3">{title}</Heading>
          <p className="text-sm leading-7">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
