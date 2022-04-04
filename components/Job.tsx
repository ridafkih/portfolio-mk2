import React from "react";

import Heading from "@/components/Heading";
import DateRange from "@/components/DateRange";
import Paragraph from "@/components/Paragraph";

interface JobProps {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  jobStart: Date;
  jobEnd?: Date;
}

const Job: React.VFC<JobProps> = ({
  companyName,
  jobTitle,
  jobDescription,
  jobStart,
  jobEnd,
}) => {
  return (
    <li className="relative pt-8 space-y-2 border-t rounded-sm first:pt-0 first:border-none border-t-neutral-300 dark:border-t-neutral-700">
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row-reverse">
        <div className="sm:text-right opacity-80">
          <h3 className="font-medium">{jobTitle}</h3>
          <div className="hidden">
            <DateRange startDate={jobStart} endDate={jobEnd} />
          </div>
        </div>
        <Heading type="h3">{companyName}</Heading>
      </div>
      <Paragraph weight="light">{jobDescription}</Paragraph>
    </li>
  );
};

export default Job;
