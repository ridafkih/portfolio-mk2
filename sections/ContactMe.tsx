import React from "react";
import Link from "next/link";

import Section from "@/components/Section";
import DynamicGradient from "@/components/DynamicGradient";

const ContactMe: React.VFC = () => {
  return (
    <Section>
      <div className="relative h-[75vh] flex flex-col items-center justify-center text-center">
        <DynamicGradient />
        <h2 className="py-8 text-5xl">Have a challenge for me?</h2>
        <p className="max-w-[48ch]">
          I occasionally take on new opportunities.
        </p>
        <p className="max-w-[48ch]">
          <Link href="">Get in touch</Link> and I&apos;d love to hear about
          yours.
        </p>
      </div>
    </Section>
  );
};

export default ContactMe;
