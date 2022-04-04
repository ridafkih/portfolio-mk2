import React from "react";

const paragraphWeights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

interface ParagraphProps {
  characterLimit?: number;
  weight?: keyof typeof paragraphWeights;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  characterLimit,
  weight = "normal",
}) => (
  <p
    className={`leading-7 ${paragraphWeights[weight]}`}
    style={characterLimit ? { maxWidth: `${characterLimit}ch` } : {}}
  >
    {children}
  </p>
);

export default Paragraph;
