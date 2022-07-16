import { Coordinates } from "@/@types/position";
import { useEffect, useState } from "react";

const CLICKABLE_ELEMENTS = ["BUTTON", "A"];

type PointerType = "desktop" | "mobile";
type MouseHoverEvent = MouseEvent & { path: HTMLCollection };

/**
 * Checks if an HTMLElement is clickable.
 * @returns A boolean value.
 */
const isClickable = (target: EventTarget) => {
  if (target instanceof HTMLElement)
    return CLICKABLE_ELEMENTS.includes(target.tagName);
  return false;
};

/**
 * A hook in which, on initial render, will check if the pointer
 * type is similar to that of a touch device.
 */
const usePointerType = () => {
  const [pointerType, setPointerType] = useState<PointerType>("mobile");

  useEffect(() => {
    const pointerIsCoarse = window.matchMedia("(pointer: coarse)").matches;
    setPointerType(pointerIsCoarse ? "mobile" : "desktop");
  }, []);

  return { pointerType };
};

/**
 * A hook which will provide whether or not one of the elements
 * in the DOM tree below the cursor is clickable.
 * 
 * Clickable elements are defined within `CLICKABLE_ELEMENTS` constant.
 */
const useCanClick = () => {
  const [canClick, setCanClick] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = ((event: MouseHoverEvent) => {
      const pathArray = Array.from(event.composedPath());
      const pathContainsClickable = pathArray.some(isClickable);

      setCanClick(pathContainsClickable);
    }) as (event: MouseEvent) => void;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return { canClick };
};

/**
 * A React hook which checks the mouse button state, pressed, or not.
 */
const useMouseButtonState = () => {
  const [pressed, setPressed] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseDown = () => setPressed(true);
    const handleMouseUp = () => setPressed(false);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return { pressed };
};

/**
 * A React hook which reports the current cursor position.
 */
const useMousePosition = () => {
  const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (({ clientX: x, clientY: y }: MouseHoverEvent) => {
      setPosition({ x, y });
    }) as (event: MouseEvent) => void;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return { position };
};

/**
 * A React hook which reports mouse data.
 * @returns An object containing the mouse position, pressed state, whether it can click, and the pointer type.
 */
export const useMouse = () => {
  const { position } = useMousePosition();
  const { pressed } = useMouseButtonState();
  const { canClick } = useCanClick();
  const { pointerType } = usePointerType();

  return { position, pressed, canClick, pointerType };
};