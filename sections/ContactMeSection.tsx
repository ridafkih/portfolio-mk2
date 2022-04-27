import React from "react";
import Link from "next/link";

import Section from "@/atoms/Section";
import DynamicGradient from "@/components/DynamicGradient";
import Paragraph from "@/atoms/Paragraph";

interface ContactMeSectionProps {
  email: string;
}

const ContactMeSection: React.VFC<ContactMeSectionProps> = ({ email }) => {
  return (
    <Section label="Have a challenge for me?">
      <div className="relative h-[75vh] flex flex-col items-center justify-center text-center">
        <DynamicGradient />
        <h2 className="py-8 text-5xl">Have a challenge for me?</h2>
        <Paragraph characterLimit={48}>
          I occasionally take on new opportunities.
        </Paragraph>
        <Paragraph characterLimit={48}>
          <Link href={`mailto:${email}`}>Get in touch</Link> and I&apos;d love
          to hear about yours.
        </Paragraph>
      </div>
    </Section>
  );
};

export default ContactMeSection;
