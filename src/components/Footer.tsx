import React from "react";
import { css } from "linaria";
import { Twitter } from "~/components/Twitter";
import { Facebook } from "~/components/Facebook";
import clsx from "clsx";

type Props = {};

export const Footer: React.FC<Props> = React.memo(({}): JSX.Element => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Twitter />
          </div>
          <div className={clsx("col-md-4", styles["facebook"])}>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  `,
};
