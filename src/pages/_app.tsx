import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleAnalytics from "~/components/GoogleAnalytics";
import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="学生団体with, 鯖江, らてんぽ, プランコンテスト, メガネ, 学生団体, with" />
        <meta
          name="description"
          content="鯖江から世界へ！学生団体withによるブログ「人と人とをつなぐ、つながる」福井県鯖江市にある学生活動拠点施設「らてんぽ」から世界へ"
        />
        <meta name="author" content="学生団体with" />
        <meta property="og:site_name" content="学生団体with" />
        <meta property="og:title" content="学生団体with" />
        <meta property="og:url" content="http://with-sabae.com/" />
        <meta
          property="og:description"
          content="鯖江から世界へ！学生団体withによるブログ「人と人とをつなぐ、つながる」福井県鯖江市にある学生活動拠点施設「らてんぽ」から世界へ"
        />
        <meta property="og:image" content="http://with-sabae.com/images/logo.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="学生団体with" />
        <meta
          name="twitter:description"
          content="鯖江から世界へ！学生団体withによるブログ「人と人とをつなぐ、つながる」福井県鯖江市にある学生活動拠点施設「らてんぽ」から世界へ"
        />
        <meta name="twitter:site" content="@sabaepc_with" />
        <meta name="twitter:image" content="http://with-sabae.com/images/logo.jpg" />
        <meta name="twitter:creator" content="@sabaepc_with" />
        <meta property="fb:app_id" content="201689657101987" />
        <link rel="shortcut icon" href="images/favicons/favicon.ico" type="/image/vnd.microsoft.icon" />
        <link rel="icon" href="images/favicons/favicon.ico" type="/image/vnd.microsoft.icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/favicons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" href="/images/favicons/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/images/favicons/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/images/favicons/favicon-160x160.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/images/favicons/favicon-196x196.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/images/favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="manifest" href="/images/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#2d88ef" />
        <meta name="msapplication-TileImage" content="/images/favicons/mstile-144x144.png" />
      </Head>
      <script
        async
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
      ></script>
      <script async src="//cdnjs.cloudflare.com/ajax/libs/three.js/87/three.min.js"></script>
      <GoogleAnalytics />
      <ChakraProvider resetCSS={false}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
