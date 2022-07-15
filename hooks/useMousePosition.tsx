import { useEffect, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

export const useMousePosition = () => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = ({ clientX: x, clientY: y }: MouseEvent) =>
      setPosition({ x, y });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return { position };
};
