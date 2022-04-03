import React from "react";

import Heading from "@/components/Heading";

interface SectionProps {
  title?: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="space-y-4">
      {title && (
        <div className="pb-4">
          <Heading type="h2">{title}</Heading>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;