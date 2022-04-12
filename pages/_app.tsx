import "../styles/globals.css";

import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import MetaData from "@/components/MetaData";

import { getCurrentUrl } from "@/utils/url";
import { SpotifyProvider } from "@/contexts/SpotifyContext";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

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
