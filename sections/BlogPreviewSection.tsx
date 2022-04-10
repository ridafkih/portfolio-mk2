import React from "react";

import Section from "@/atoms/Section";
import BlogPostPreview from "@/components/BlogPostPreview";
import { BlogPost } from "@/@types/blog";

interface BlogPreviewSection {
  blogs: BlogPost[];
}

const BlogPreviewSection: React.VFC<BlogPreviewSection> = ({ blogs }) => {
  return (
    <Section title="Blog Posts 📝">
      <div className="space-y-6">
        {blogs.map((props) => {
          return <BlogPostPreview key={props.title} {...props} />;
        })}
      </div>
    </Section>
  );
};

export default BlogPreviewSection;
