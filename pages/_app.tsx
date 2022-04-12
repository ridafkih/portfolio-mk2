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
      <Head>
        <MetaData
          title="Rida F'kih — Developer & Designer"
          description="I'm a Canadian software developer based in Calgary, Alta., I learned to code make my life a little easier. I currently work at MaxRewards as a reverse engineer & fullstack developer."
          currentUrl={getCurrentUrl(router.asPath)}
          bannerUrl={getCurrentUrl("/meta-preview.png")}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
