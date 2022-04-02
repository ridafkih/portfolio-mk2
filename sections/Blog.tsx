import React from "react";

import Section from "@/components/Section";
import BlogPost from "@/components/BlogPost";
import blogs from "@/configs/blogs";

const Blog: React.VFC = () => {
  return (
    <Section title="Blog Posts 📝">
      {blogs.map((props) => {
        return <BlogPost key={props.title} {...props} />;
      })}
    </Section>
  );
};

export default Blog;
