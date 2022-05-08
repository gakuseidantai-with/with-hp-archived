import React, { memo } from "react";
import Script from "next/script";

const GoogleAnalytics: React.FC = memo(({}): JSX.Element => {
  const GA_MEASUREMENT_ID = process.env["NEXT_PUBLIC_GA_ID"];

  const GA_TAG_SCRIPT_BODY = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "${GA_MEASUREMENT_ID}");
  `;

  return (
    <>
      {!!GA_MEASUREMENT_ID && (
        <>
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script defer id="ga" strategy="afterInteractive">
            {GA_TAG_SCRIPT_BODY}
          </Script>
        </>
      )}
    </>
  );
});

export default GoogleAnalytics;
