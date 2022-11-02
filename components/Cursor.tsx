import { useEffect, useRef, useState } from "react";
import { Coordinates } from "@/@types/position";
import { useMouse } from "@/hooks/mouse-state";
import { useKonami } from "@/hooks/konami";
import ConfettiContainer from "./ConfettiContainer";
import { SoundEffects, useSoundEffect } from "@/hooks/sound-effects";

const CONFETTI_DURATION = 1000;
const CURSOR_SPEED = 0.05;

type TrackedClick = Coordinates & { timestamp: number };

const Cursor = () => {
  const powerUpSound = useSoundEffect(SoundEffects.POWER_UP)
  const [soundPlayed, setSoundPlayed] = useState<boolean>(false);
  
  const { konamiActive } = useKonami();
  const { position, canClick, pressed, pointerType } = useMouse();

  const cursorTimeout = useRef<ReturnType<typeof setTimeout>>();
  const [cursorOpacity, setCursorOpacity] = useState<number>(0.75);
  const [cursorScale, setCursorScale] = useState<number>(1);
  const [clicks, setClicks] = useState<TrackedClick[]>([]);

  const [cursorPosition, setCursorPosition] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (konamiActive && !soundPlayed) {
      setSoundPlayed(true);
      powerUpSound.play();
    }
  }, [konamiActive, powerUpSound, soundPlayed]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!konamiActive) return;

      const coordinates = {
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      };
      
      setClicks((previousClicks) => {
        return [...previousClicks, coordinates];
      });

      setTimeout(() => {
        setClicks((previousClicks) => {
          const clone = [...previousClicks];
          const index = previousClicks.indexOf(coordinates);
          clone.splice(index, 1);
          return clone;
        })
      }, CONFETTI_DURATION);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [konamiActive]);

  useEffect(() => {
    if (pressed) return setCursorScale(0.75);
    if (canClick) return setCursorScale(1.25);
    else setCursorScale(1);
  }, [canClick, cursorPosition, pressed]);

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
  }, [cursorPosition, cursorTimeout, canClick, pressed]);

  if (pointerType === "mobile") return <></>;

  return (
    <>
      {clicks.map(({ x, y, timestamp }) => (
        <ConfettiContainer key={`${x}-${y}-${timestamp}`} x={x} y={y} />
      ))}
      <div
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          opacity: canClick || pressed ? 1 : cursorOpacity,
        }}
        className="fixed z-50 hidden transition-opacity duration-500 pointer-events-none sm:block"
      >
        <div
          className="transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full dark:border-white"
          style={{ padding: `${cursorScale}rem` }}
        />
      </div>
    </>
  );
};

export default Cursor;
