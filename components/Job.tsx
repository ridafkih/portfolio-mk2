import React from "react";
import Heading from "@/components/Heading";
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
  const parseDate = (date: Date) =>
    date.toLocaleString("en-US", { month: "long", year: "numeric" });

  return (
    <li>
      <Heading type="h3">{companyName}</Heading>
      <div className="text-sm">
        <span>{jobTitle}</span>
        <div className="flex space-x-1">
          <span>{parseDate(jobStart)}</span>
          <span>—</span>
          <span>{jobEnd ? parseDate(jobEnd) : "Current"}</span>
        </div>
      </div>
      <p className="mt-2 text-sm leading-6">{jobDescription}</p>
    </li>
  );
};

export default Job;
