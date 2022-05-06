import { css } from "@emotion/react";
import React from "react";

export const HeaderCover: React.VFC = React.memo((): JSX.Element => {
  return (
    <img src="/images/top2019_o.png" alt="with_logo" css={styles["headerCover"]} />
  );
});

const styles = {
  headerCover: css`
    width: 100%;
  `
}