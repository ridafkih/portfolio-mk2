import React from "react";

interface CircleProps {
  color: string;
}

const Circle: React.VFC<CircleProps> = ({ color }) => {
  return (
    <div
      className="w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl"
      style={{ backgroundColor: color }}
    />
  );
};

const DynamicGradient: React.VFC = () => {
  const colors = ["#2DDAFC", "#FCB72D", "#F52DFC", "#FC2D68"];

  return (
    <div className="absolute inset-0 flex flex-wrap m-auto pointer-events-none -z-10 blur-[8rem] opacity-50 dark:opacity-30 scale-75">
      {colors.map((color) => {
        return <Circle color={color} key={color} />;
      })}
    </div>
  );
};

export default DynamicGradient;
