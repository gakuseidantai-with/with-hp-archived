import Link from "next/link";
import React from "react";
import { css } from "linaria";
import clsx from "clsx";

type Props = {};

export const Header: React.FC<Props> = React.memo(({}): JSX.Element => {
  return (
    <header className={styles["headerContainer"]}>
      <div className={clsx("col-md-12", styles["header"])}>
        <div className="col-md-6">
          <Link href="/">
            <a>
              <img alt="" src="/images/with_logo.png" className={styles["logo"]} />
            </a>
          </Link>
        </div>
        <nav role="navigation" className={clsx("col-md-6", styles["navigation"])}>
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
