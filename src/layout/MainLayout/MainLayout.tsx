import React from "react";
import { Header } from "~/components/blocks/Header/Header";
import { css } from "@emotion/react";
import { Footer } from "~/components/blocks/Footer";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const MainLayout: React.VFC<Props> = React.memo(({ children }): JSX.Element => {
  return (
    <div css={styles["container"]}>
      <Header />
      <div css={styles["contentContainer"]}>{children}</div>
      <Footer />
    </div>
  );
});

const styles = {
  container: css``,
  contentContainer: css`
    margin-top: 70px;
  `,
};
