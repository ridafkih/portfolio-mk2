import React from "react";

import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Navigation from "@/atoms/Navigation";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Header: React.VFC = () => {
  return (
    <header className="flex items-start justify-between px-8 py-12 sm:items-center sm:px-24">
      <Navigation items={navItems} />
      <CurrentlyPlaying />
    </header>
  );
};

export default Header;
