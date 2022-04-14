import "../styles/globals.css";
import type { AppProps } from "next/app";

import { usePostHog } from "next-use-posthog";
import { SpotifyProvider } from "@/contexts/SpotifyContext";
import Analytics from "@/components/Analytics";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  usePostHog("phc_Eha0Zvd4PTi3HOq5nqS9GisOI13f2pt0zB7J6iPP8oE", {
    api_host: "https://app.posthog.com",
  });

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
