export default interface SpotifyListeningData {
  name?: string;
  image?: {
    height: number;
    width: number;
    url: string;
  };
  link?: string;
  artists?: string;
  isPlaying: boolean;
}
