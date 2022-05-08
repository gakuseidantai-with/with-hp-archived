import React from "react";
import { css } from "linaria";
import Script from "next/script";

export const Twitter: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles["buttonContainer"]}>
        <a
          className="twitter-share-button"
          href="https://twitter.com/share"
          data-via="sabaepc_with"
          data-hashtags="学生団体with"
        >
          Tweet
        </a>
        <a className="twitter-follow-button" href="https://twitter.com/sabaepc_with" data-show-count="true">
          Follow @sabaepc_with
        </a>
      </div>
      <a
        className="twitter-timeline"
        href="https://twitter.com/sabaepc_with"
        data-height="500"
        data-width=""
        data-theme="light"
      >
        Tweets by sabaepc_with
      </a>
      <Script defer src={"https://platform.twitter.com/widgets.js"} strategy="afterInteractive" />
    </>
  );
};

const styles = {
  buttonContainer: css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-bottom: 16px;
  `,
};
