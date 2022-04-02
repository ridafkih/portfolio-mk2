import React from "react";

import Heading from "@/components/Heading";
import DateRange from "@/components/DateRange";

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
    <li className="relative pt-8 border-t rounded-sm first:pt-0 first:border-none border-t-neutral-300">
      <div className="flex flex-row-reverse items-start justify-between">
        <div className="text-right text-neutral-700">
          <h4 className="font-medium">{jobTitle}</h4>
          <div className="invisible">
            <DateRange startDate={jobStart} endDate={jobEnd} />
          </div>
        </div>
        <Heading type="h3">{companyName}</Heading>
      </div>
      <p className="mt-2 text-sm leading-6">{jobDescription}</p>
    </li>
  );
};

export default Job;
