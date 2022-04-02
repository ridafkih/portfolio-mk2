import React from "react";

interface DateRangeProps {
  startDate: Date;
  endDate?: Date;
}

const DateRange: React.VFC<DateRangeProps> = ({ startDate, endDate }) => {
  const parseDate = (date: Date) =>
    date.toLocaleString("en-US", { month: "long", year: "numeric" });

  return (
    <div className="text-sm">
      <div className="flex space-x-1">
        <time dateTime={startDate.toString()}>{parseDate(startDate)}</time>
        <span>—</span>
        {endDate ? (
          <time dateTime={endDate.toString()}>{parseDate(endDate)}</time>
        ) : (
          <span>Current</span>
        )}
      </div>
    </div>
  );
};

export default DateRange;
