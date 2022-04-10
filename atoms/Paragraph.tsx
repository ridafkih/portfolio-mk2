import React from "react";

const paragraphWeights = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

interface ParagraphProps {
  characterLimit?: number;
  weight?: keyof typeof paragraphWeights;
  alignRight?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  characterLimit,
  weight = "normal",
  alignRight = false,
}) => {
  const alignmentClass = alignRight ? "text-right" : "text-left";

  return (
    <p
      className={`whitespace-pre-line leading-7 ${paragraphWeights[weight]} ${alignmentClass}`}
      style={characterLimit ? { maxWidth: `${characterLimit}ch` } : {}}
    >
      {children}
    </p>
  );
};

export default Paragraph;
