import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import SpotifyListeningData from "@/@types/SpotifyListeningData";
import Image from "next/image";

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
        <Link href={spotifyData.link!} passHref replace={false}>
          <a
            className="font-normal after:bg-transparent"
            target="spotify:link_out"
          >
            <div className="flex items-center gap-2">
              <Image
                className="rounded"
                width={18}
                height={18}
                src={spotifyData.image!.url}
                alt={`${spotifyData.name} by ${spotifyData.artists} album cover.`}
              />
              <span className="cursor-alias">
                {spotifyData.name} by {spotifyData.artists}
              </span>
            </div>
          </a>
        </Link>
      )}
      <FontAwesomeIcon className="ml-2" size="lg" icon={faSpotify} />
    </div>
  );
};

export default CurrentlyPlaying;
