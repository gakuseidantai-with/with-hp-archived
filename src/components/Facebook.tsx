import { css } from "linaria";
import Script from "next/script";
import React from "react";

export const Facebook: React.FC = (): JSX.Element => {
  return (
    <>
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v13.0"
        nonce="GQ4h1fn6"
      />
      <iframe
        className={styles.shareButton}
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwith-sabae.com&layout=box_count&size=small&width=69&height=40&appId"
        width="69"
        height="40"
      ></iframe>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/sabaewith/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote cite="https://www.facebook.com/sabaewith/" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/sabaewith/">学生団体with</a>
        </blockquote>
      </div>
    </>
  );
};

const styles = {
  shareButton: css`
    margin-top: -12px;

    @media screen and (max-width: 768px) {
      margin-top: 12px;
    }
  `,
};
