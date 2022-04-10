import React from "react";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  type: HeadingType & string;
  className?: string;
}

const typeClassNames: Record<HeadingType, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-md font-medium",
};

const Heading: React.FC<HeadingProps> = ({ type, children, className = "" }) =>
  React.createElement(
    type,
    {
      className: `${typeClassNames[type]} tracking-tighter ${className}`,
    },
    children
  );

export default Heading;
