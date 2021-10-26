import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="global.css" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
