import { css } from "@emotion/react";
import React from "react";
import { FaRegEnvelope, FaTwitterSquare, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export const Information: React.VFC = React.memo((): JSX.Element => {
  return (
    <div className="container" css={styles["container"]}>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center" css={styles["informationContainer"]}>
          <h2 css={styles["title"]}>学生団体withとは</h2>
          <h3 css={styles["subTitle"]}>&ldquo;人と人とをつなぐ、つながる&rdquo;</h3>
          <p css={styles["description"]}>
            地元学生に刺激を与え「意識改革」「スキルアップ」を促し、自ら行動するきっかけを与えるため2011年1月に「学生団体with」を設立。現在では地域の人に頼られる存在となり、全国からも注目を浴びる鯖江市の地方創生に大きく貢献しています。近年は、グローバル企業や地元企業と連携した取り組みも行うなど活動の幅を広げています。
          </p>
        </div>
        <hr />
        <div className="col-md-8 offset-md-2 text-center" css={styles["inviteContainer"]}>
          <img src="/images/with_catchCopy.jpg" alt="with_catchCopy" css={styles["catchCopy"]} />
          <h2 css={styles["title"]}>メンバー大募集中！！</h2>
          <p css={styles["description"]}>
            学生団体withは、県内トップクラスのプログラマーが在籍！
            <br />
            ホームページや運営しているイベントページ、システムも自分達で制作しています。
          </p>
        </div>
        <div css={styles["socialContainer"]}>
          <div className="col-lg-12 text-center">
            <div className="row">
              <div className="col-lg-6 text-center">
                <FaRegEnvelope size={"3em"} color={"#7f7f7f"} />
                <p className="pb-3">
                  <a href="mailto:gakuseidantai.with@gmail.com">gakuseidantai.with@gmail.com</a>
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <img src="images/line_logo.png" alt="" />
                <p className="pb-3">
                  <a href="https://lin.ee/ut4Mvol">学生団体with</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="row">
              <div className="col-lg-4 text-center">
                <FaTwitterSquare size={"3em"} color={"#7f7f7f"} />
                <p className="pb-3">
                  <a href="https://twitter.com/sabaepc_with" target="_blank" rel="noreferrer">
                    学生団体with( @sabaepc_with )
                  </a>
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <FaInstagram size={"3em"} color={"#7f7f7f"} />
                <p className="pb-3">
                  <a href="https://www.instagram.com/with__sabae/" target="_blank" rel="noreferrer">
                    学生団体with( @with__sabae )
                  </a>
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <FaFacebookSquare size={"3em"} color={"#7f7f7f"} />
                <p className="pb-3">
                  <a href="https://ja-jp.facebook.com/sabaewith/" target="_blank" rel="noreferrer">
                    学生団体with( @sabaewith )
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const styles = {
  container: css`
    padding: 0 32px;
  `,
  informationContainer: css`
    padding: 5em 0;
  `,
  inviteContainer: css`
    padding: 5em 0 1em 0;
  `,
  socialContainer: css`
    padding: 1em 0 5em 0;
  `,
  title: css`
    margin: 1.5em 0;
  `,
  subTitle: css`
    margin-bottom: 20px;
  `,
  description: css`
    line-height: 1.6em;
    color: #7f7f7f;
  `,
  catchCopy: css`
    width: 80%;
    margin-top: 20px;
  `,
};
