import "../styles/globals.css";

import type { AppProps } from "next/app";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
