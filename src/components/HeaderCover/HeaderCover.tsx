import { css } from "linaria";
import React from "react";

type Props = {
  imagePath: string;
};

export const HeaderCover: React.FC<Props> = React.memo(({ imagePath }): JSX.Element => {
  return <img src={imagePath} alt="with_logo" className={styles["headerCover"]} />;
});

const styles = {
  headerCover: css`
    width: 100%;
  `,
};
