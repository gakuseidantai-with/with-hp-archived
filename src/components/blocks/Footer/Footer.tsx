import React from "react";
import { css } from "@emotion/react";
import { Twitter } from "../Twitter";
import { Facebook } from "../Facebook";

type Props = {};

export const Footer: React.VFC<Props> = React.memo(({}): JSX.Element => {
  return (
    <footer css={styles["footer"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Twitter />
          </div>
          <div className="col-md-4" css={styles["facebook"]}>
            <Facebook />
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
