import { css } from "@emotion/react";
import Script from "next/script";
import React from "react";

export const Facebook: React.VFC = (): JSX.Element => {
  return (
    <>
      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwith-sabae.com%2F&layout=box_count&size=small&mobile_iframe=true&width=61&height=40&appId"
        width="61"
        height="40"
        scrolling="no"
        frameBorder="0"
        css={styles["shareButton"]}
      ></iframe>
      <div id="fb-root"></div>
      <Script id="fb" defer strategy="afterInteractive">
        {`
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.8";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `}
      </Script>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/sabaewith/"
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
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
  `
}