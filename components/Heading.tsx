import React from "react";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  type: HeadingType;
}

const typeClassNames: Record<HeadingType, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold mb-4",
  h3: "text-2xl font-medium",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-md font-medium",
};

const Heading: React.FC<HeadingProps> = ({ type, children }) =>
  React.createElement(
    type,
    {
      className: `${typeClassNames[type]} tracking-tighter`,
    },
    children
  );

export default Heading;
