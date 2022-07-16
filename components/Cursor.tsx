import { Coordinates } from "@/@types/position";
import { useMouse } from "@/hooks/useMouse";
import React, { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.05;

const Cursor = () => {
  const { position, canClick, isClicking, hasPointer } = useMouse();

  const cursorTimeout = useRef<ReturnType<typeof setTimeout>>();

  const [cursorOpacity, setCursorOpacity] = useState<number>(0.75);
  const [cursorScale, setCursorScale] = useState<number>(1);

  const [cursorPosition, setCursorPosition] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (isClicking) return setCursorScale(0.75);
    if (canClick) return setCursorScale(1.25);
    setCursorScale(1);
  }, [canClick, isClicking]);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      setCursorPosition((previous) => {
        const distance: Coordinates = {
          x: (position.x - previous.x) * CURSOR_SPEED,
          y: (position.y - previous.y) * CURSOR_SPEED,
        };

        const newCursorPosition = {
          x: Math.floor((previous.x + distance.x) * 10) / 10,
          y: Math.floor((previous.y + distance.y) * 10) / 10,
        };

        if (
          newCursorPosition.x === previous.x &&
          newCursorPosition.y === previous.y
        )
          return previous;

        return newCursorPosition;
      });
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [position]);

  useEffect(() => {
    const { current: timeout } = cursorTimeout;
    if (timeout) clearTimeout(timeout);
    setCursorOpacity(0.75);
    cursorTimeout.current = setTimeout(() => setCursorOpacity(0), 500);
  }, [cursorPosition, cursorTimeout, canClick, isClicking]);

  if (!hasPointer) return <></>;

  return (
    <div
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        opacity: (canClick || isClicking) ? 1 : cursorOpacity,
      }}
      className="fixed z-50 hidden transition-opacity duration-500 pointer-events-none sm:block"
    >
      <div
        className="transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full dark:border-white"
        style={{ padding: `${cursorScale}rem` }}
      />
    </div>
  );
};

export default Cursor;
