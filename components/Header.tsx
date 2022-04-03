import React from "react";

import CurrentlyPlaying from "@/components/CurrentlyPlaying";

const Header: React.VFC = () => {
  return (
    <header className="flex justify-end">
      <CurrentlyPlaying />
    </header>
  );
};

export default Header;
