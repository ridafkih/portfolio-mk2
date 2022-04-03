import React from "react";

import Section from "@/components/Section";
import BlogPost from "@/components/BlogPost";
import blogs from "@/configs/blogs";

const Blog: React.VFC = () => {
  return (
    <Section title="Blog Posts 📝">
      <div className="space-y-6">
        {blogs.map((props) => {
          return <BlogPost key={props.title} {...props} />;
        })}
      </div>
    </Section>
  );
};

export default Blog;
