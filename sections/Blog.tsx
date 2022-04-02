import React from "react";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";

const Blog: React.VFC = () => {
  return (
    <Section title="Blog Posts 📝">
      <div className="space-y-8">
        <div className="flex items-center p-6 -mx-6 border rounded-md border-neutral-300">
          <div className="space-y-2">
            <Heading type="h3">
              How not to expose the personal data of 19,577 Canadians.
            </Heading>
            <Paragraph>
              A month ago, I spoke to CBC news about PORTpass. An attempt by a
              local entrepreneur to bring digital proof-of-vaccine to Canadians.
              I have spoken to many about PORTpass, and their failure...
            </Paragraph>
          </div>
        </div>
        <div className="flex items-center p-6 -mx-6 border rounded-md border-neutral-300">
          <div className="space-y-2">
            <Heading type="h3">
              Rotating hexadecimal strings with JavaScript.
            </Heading>
            <Paragraph>
              This is code I used in ReNFC, an electron app that pairs with a
              Raspberry Pi server to &quot;re-write&quot; NFC serial...
            </Paragraph>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
