import "../styles/globals.css";

import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { usePostHog } from "next-use-posthog";

import MetaData from "@/components/MetaData";

import { getCurrentUrl } from "@/utils/url";
import { SpotifyProvider } from "@/contexts/SpotifyContext";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  usePostHog("phc_Eha0Zvd4PTi3HOq5nqS9GisOI13f2pt0zB7J6iPP8oE", {
    api_host: "https://app.posthog.com",
  });

  return (
    <>
      <SpotifyProvider>
        <MetaData currentUrl={getCurrentUrl(router.asPath)} />
        <Component {...pageProps} />
      </SpotifyProvider>
    </>
  );
};

export default MyApp;
