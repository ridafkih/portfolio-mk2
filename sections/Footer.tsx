import Heading from "@/components/Heading";
import Section from "@/components/Section";
import Link from "next/link";
import React from "react";

const Footer: React.VFC = () => {
  return (
    <Section>
      <footer className="h-[75vh] flex flex-col items-center justify-center text-center">
        <h2 className="py-8 text-5xl">Have a challenge for me?</h2>
        <p className="max-w-[48ch]">
          I occasionally take on new opportunities.
        </p>
        <p className="max-w-[48ch]">
          <Link href="">Get in touch</Link> and I&apos;d love to hear about
          yours.
        </p>
      </footer>
    </Section>
  );
};

export default Footer;
