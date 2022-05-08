import React from "react";
import { Header } from "~/components/Header";
import { css } from "linaria";
import { Footer } from "~/components/footer";

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const MainLayout: React.FC<Props> = React.memo(({ children }): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["contentContainer"]}>{children}</div>
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
