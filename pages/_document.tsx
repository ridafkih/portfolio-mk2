import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
};

export default Document;
