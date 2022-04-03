import React from "react";

import CurrentlyPlaying from "@/components/CurrentlyPlaying";

const Header: React.VFC = () => {
  return (
    <header className="flex justify-end px-32 py-12">
      <CurrentlyPlaying />
    </header>
  );
};

export default Header;
