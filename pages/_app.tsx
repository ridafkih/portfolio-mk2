import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SpotifyProvider } from "@/contexts/SpotifyContext";
import Analytics from "@/components/Analytics";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SpotifyProvider>
        <Component {...pageProps} />
      </SpotifyProvider>
      <Analytics />
    </>
  );
};

export default MyApp;
