import React from "react";

import Section from "@/components/Section";
import BlogPost from "@/components/BlogPostPreview";
import blogs from "@/configs/blogs";

const BlogPreviewSection: React.VFC = () => {
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

export default BlogPreviewSection;
