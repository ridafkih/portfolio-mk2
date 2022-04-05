import React from "react";

import Job from "@/components/Job";
import Section from "@/components/Section";

import jobs from "@/configs/jobs";

const MyOpportunitiesSection: React.VFC = () => (
  <Section title="My Opportunities 💼">
    <ul className="space-y-8">
      {jobs.map((props) => {
        const { companyName, jobTitle, jobStart } = props;
        const key = `${companyName}:${jobTitle}:${jobStart.getTime()}`;
        return <Job key={key} {...props} />;
      })}
    </ul>
  </Section>
);

export default MyOpportunitiesSection;
