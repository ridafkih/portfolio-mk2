import React, { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import SpotifyListeningData from "@/@types/SpotifyListeningData";

const CurrentlyPlaying = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyListeningData>({
    isPlaying: false,
  });

  const fetchSpotifyData = () =>
    axios
      .get<SpotifyListeningData>("/api/spotify")
      .catch(() => void 0)
      .then((response) => {
        if (response) setSpotifyData(response.data);
      });

  useEffect(() => {
    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex items-center gap-2 ${
        spotifyData.isPlaying ? "animate-pulse" : "opacity-75"
      }`}
    >
      {!spotifyData.isPlaying ? (
        <span className="opacity-75">Not Listening...</span>
      ) : (
        <span>
          {spotifyData.name} by {spotifyData.artists}
        </span>
      )}
      <FontAwesomeIcon size="lg" icon={faSpotify} />
    </div>
  );
};

export default CurrentlyPlaying;
