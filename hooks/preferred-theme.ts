import { useEffect, useState } from "react";

export const usePreferredTheme = () => {
  const getCurrentTheme = () => {
    if (typeof window === "undefined") return false;
    const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
    return matches;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
  
  const themeListener = ({ matches }: MediaQueryListEvent) =>
    setIsDarkTheme(matches);
  
  useEffect(() => {
    const darkMediaWatcher = window.matchMedia("(prefers-color-scheme: dark)");
    darkMediaWatcher.addEventListener("change", themeListener);
    return () => darkMediaWatcher.removeEventListener("change", themeListener);
  }, []);

  return { theme: isDarkTheme ? "dark" : "light" };
}