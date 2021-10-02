import React from "react";
import Script from "next/script";
import { css } from "@emotion/react";
import { useEmbeddedTweetTimeline } from "~/hooks/useEmbeddedTweetTimeline";
import { useEmbeddedFacebook } from "~/hooks/useEmbeddedFacebook";

type Props = {};

export const Footer: React.VFC<Props> = React.memo(({}): JSX.Element => {
  const tweetTimeLine: JSX.Element = useEmbeddedTweetTimeline();
  const facebookTimeLine: JSX.Element = useEmbeddedFacebook();
  return (
    <footer css={styles["footer"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">{tweetTimeLine}</div>
          <div className="col-md-4" css={styles["facebook"]}>
            {facebookTimeLine}
          </div>
        </div>
      </div>
    </footer>
  );
});

const styles = {
  footer: css`
    position: relative;
    float: left;
    width: 100%;
    padding: 2em 0;
    background: #262626;
  `,
  twitterShareButton: css``,
  twitterFollowButton: css``,
  twitterTimeline: css``,
  facebook: css`
    text-align: center;
  `,
};
