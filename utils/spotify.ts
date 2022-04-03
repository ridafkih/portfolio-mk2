import axios from "axios";

import SpotifyListeningData from "@/@types/SpotifyListeningData";

const CURRENTLY_LISTENING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";

/**
 * Gets the Spotify listening data for the user with the provided OAuth token.
 * @returns A promise that resolves the listening data.
 */
export const getSpotifyListeningData = (
  oAuthToken: string
): Promise<SpotifyListeningData> =>
  axios
    .get(CURRENTLY_LISTENING_URL, {
      params: {
        market: "CA",
      },
      headers: {
        Authorization: `Bearer ${oAuthToken}`,
      },
    })
    .then(({ data }) => {
      const { item, is_playing } = data;

      const { name, album } = item;
      const { artists, images, href: link } = album;
      const [image] = images;

      return {
        name,
        image,
        link,
        artists: artists.map(({ name }: { name: string }) => name).join(", "),
        isPlaying: is_playing,
      };
    })
    .catch(() => ({ isPlaying: false }));
