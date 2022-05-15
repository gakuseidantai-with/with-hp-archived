import React from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleAnalytics from "~/components/GoogleAnalytics";
import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
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
