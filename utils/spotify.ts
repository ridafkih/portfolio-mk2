import SpotifyListeningData from "@/@types/SpotifyListeningData";

import SpotifyWebApi from "spotify-web-api-node";

interface SpotifyItem {
  item: {
    name: string;
    album: {
      id: string;
    };
  };
}

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URL,
});

export const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-currently-playing",
  "user-read-playback-state",
];

/**
 * Gets the Spotify listening data for the user with the provided OAuth
 * token set as the SPOTIFY_OAUTH_TOKEN variable
 * @returns
 */
export const getSpotifyListeningData = async (
  accessToken: string
): Promise<SpotifyListeningData> => {
  spotifyApi.setAccessToken(accessToken);
  const { body: data } = await spotifyApi.getMyCurrentPlayingTrack({});

  const { item } = data as unknown as SpotifyItem;
  const { name } = item;

  const { body: album } = await spotifyApi.getAlbum(item?.album.id);

  const { is_playing: isPlaying } = data;
  const {
    artists,
    external_urls: { spotify: link },
    images,
  } = album;

  const [image] = images;

  return {
    name,
    image,
    link,
    artists: artists.map(({ name }: { name: string }) => name).join(", "),
    isPlaying,
  };
};

export const refreshSpotifyAccessToken = async (code: string) =>
  spotifyApi.authorizationCodeGrant(code).then(({ body }) => body);
