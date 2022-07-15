import { Coordinates } from "@/@types/position";
import { useEffect, useState } from "react";

type MouseHoverEvent = MouseEvent & { path: HTMLCollection };

const clickableElements = ["BUTTON", "A"];

const containsClickableElement = ({ tagName }: Element) =>
  clickableElements.includes(tagName);

export const useMouse = () => {
  const [isClicking, setClicking] = useState<boolean>(false);
  const [hasPointer, setHasPointer] = useState<boolean>(false);
  const [canClick, setCanClick] = useState<boolean>(false);
  const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) setHasPointer(true);
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (({
      clientX: x,
      clientY: y,
      path,
    }: MouseHoverEvent) => {
      const pathArray = Array.from(path);
      const pathContainsClickable = pathArray.some(containsClickableElement);

      setCanClick(pathContainsClickable);
      setPosition({ x, y });
    }) as (event: MouseEvent) => void;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return { position, canClick, isClicking, hasPointer };
};
