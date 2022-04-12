import "../styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import MetaData from "@/components/MetaData";

import { getCurrentUrl } from "@/utils/url";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <MetaData currentUrl={getCurrentUrl(router.asPath)} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
