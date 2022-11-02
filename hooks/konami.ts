import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export const useKonami = () => {
  const [konamiActive, setKonamiActive] = useState<boolean>(false);
  const [konamiProgress, setKonamiProgress] = useState<number>(0);
  
  useEffect(() => {
    if (konamiProgress === KONAMI_CODE.length) setKonamiActive(true);
  }, [konamiProgress]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (konamiActive) return;

      setKonamiProgress((previousProgress) => {
        if (event.code === KONAMI_CODE[previousProgress])
        return previousProgress + 1;
        return 0;
      });
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [konamiActive]);

  return { konamiActive };
};