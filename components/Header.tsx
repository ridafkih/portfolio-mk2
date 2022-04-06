import React from "react";

import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Navigation from "@/components/Navigation";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Photos",
    path: "/photos",
  },
  {
    name: "Scrawls",
    path: "/scrawls",
  },
];

const Header: React.VFC = () => {
  return (
    <header className="flex justify-between px-8 py-12 sm:px-24">
      <Navigation items={navItems} />
      <CurrentlyPlaying />
    </header>
  );
};

export default Header;
