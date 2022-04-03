import React from "react";

import CurrentlyPlaying from "@/components/CurrentlyPlaying";

const Header: React.VFC = () => {
  return (
    <header className="flex justify-end px-8 py-12 sm:px-24">
      <CurrentlyPlaying />
    </header>
  );
};

export default Header;
