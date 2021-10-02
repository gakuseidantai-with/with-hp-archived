import Link from "next/link";
import React from "react";
import { css } from "@emotion/react";

type Props = {};

export const Header: React.VFC<Props> = React.memo(({}): JSX.Element => {
  return (
    <header css={styles["headerContainer"]}>
      <div className="col-md-12" css={styles["header"]}>
        <div className="col-md-6">
          <Link href="/">
            <a>
              <img alt="" src="/images/with_logo.png" css={styles["logo"]} />
            </a>
          </Link>
        </div>
        <nav role="navigation" className="col-md-6" css={styles["navigation"]}>
          <ul>
            <li>
              <Link href="/">
                <a>トップページ</a>
              </Link>
            </li>
            <li>
              <Link href="/member">
                <a>メンバー紹介</a>
              </Link>
            </li>
            <li>
              <Link href="https://sabae-plancontest.jp/">
                <a target="_blank">プランコンテスト</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

const styles = {
  headerContainer: css`
    width: 100%;
    margin: 0;
    position: fixed;
    top: 0;
    height: 70px;
    background-color: #fff;
    z-index: 99999;
  `,
  header: css`
    display: flex;
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
    padding-left: 20px;
    padding-right: 20px;
    float: left;
    border-radius: 7px;
  `,
  logo: css`
    width: auto;
    height: 70px;
    padding: 4px 0;
  `,
  navigation: css`
    margin: auto;
    text-align: right;
    ul {
      padding: 0;
      margin: 0;
      line-height: 0;
    }
    li {
      padding: 0;
      margin: 0;
      list-style: none;
      display: inline-block;
      zoom: 1;
      a {
        color: rgba(0, 0, 0, 0.7);
        font-size: 18px;
        padding: 10px;
        position: relative;
        transition: 0.2s;
      }
    }
  `,
};
