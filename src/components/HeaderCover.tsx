import { css } from "linaria";
import Script from "next/script";
import React from "react";

type Props = {
  imagePath: string;
};

export const HeaderCover: React.FC<Props> = React.memo(({ imagePath }): JSX.Element => {
  // return <img src={imagePath} alt="with_logo" className={styles["headerCover"]} />;
  return (
    <>
      <Script src="/js/animation.js" id="animation" />
      <div id="visual" className={styles["headerCover"]}></div>
    </>
  );
});

const styles = {
  headerCover: css`
    width: 100%;
    height: 100vh;
  `,
};
