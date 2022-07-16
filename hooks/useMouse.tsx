import { Coordinates } from "@/@types/position";
import { useEffect, useState } from "react";

type MouseHoverEvent = MouseEvent & { path: HTMLCollection };

const clickableElements = ["BUTTON", "A"];

const containsClickableElement = (target: EventTarget) => {
  if (target instanceof HTMLElement)
    return clickableElements.includes(target.tagName);
};

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
    const handleMouseMove = ((event: MouseHoverEvent) => {
      const pathArray = Array.from(event.composedPath());
      const pathContainsClickable = pathArray.some(containsClickableElement);

      setCanClick(pathContainsClickable);
      setPosition({ x: event.clientX, y: event.clientY });
    }) as (event: MouseEvent) => void;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return { position, canClick, isClicking, hasPointer };
};
