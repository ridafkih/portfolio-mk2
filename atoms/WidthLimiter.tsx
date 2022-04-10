import React from "react";

const WidthLimiter: React.FC = ({ children }) => {
  return <div className="w-full max-w-[52rem] mx-auto">{children}</div>;
};

export default WidthLimiter;
