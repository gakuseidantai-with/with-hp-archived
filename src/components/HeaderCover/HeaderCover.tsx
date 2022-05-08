import { css } from "@emotion/react";
import React from "react";

type Props = {
  imagePath: string;
};

export const HeaderCover: React.VFC<Props> = React.memo(({ imagePath }): JSX.Element => {
  return <img src={imagePath} alt="with_logo" css={styles["headerCover"]} />;
});

const styles = {
  headerCover: css`
    width: 100%;
  `,
};
