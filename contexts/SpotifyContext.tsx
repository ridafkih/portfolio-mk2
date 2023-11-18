import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { SpotifyListeningData } from "@/@types/spotify";

interface SpotifyContextProps {
  spotifyData: SpotifyListeningData | null;
}

const initialValue = { spotifyData: null };

export const SpotifyContext = createContext<SpotifyContextProps>(initialValue);

export const SpotifyProvider: React.FC = ({ children }) => {
  const [spotifyData, setSpotifyData] = useState<SpotifyListeningData | null>(
    null
  );

  const updateSpotifyData = () =>
    axios
      .get<SpotifyListeningData>("/api/spotify/listening")
      .catch(() => void 0)
      .then((response) => {
        if (response) setSpotifyData(response.data);
      });

  useEffect(() => {
    updateSpotifyData();
    const interval = setInterval(updateSpotifyData, 5 * 1000);
    return () => clearInterval(interval);
  }, []);

  const value = { spotifyData, updateSpotifyData };

  return (
    <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
  );
};
