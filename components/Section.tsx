import React from "react";

import Heading from "@/components/Heading";

interface SectionProps {
  title?: string;
  label?: string;
}

const Section: React.FC<SectionProps> = ({ title, label, children }) => {
  return (
    <section aria-label={label || title}>
      {title && <Heading type="h2">{title}</Heading>}
      <div className="space-y-4">{children}</div>
    </section>
  );
};

export default Section;
