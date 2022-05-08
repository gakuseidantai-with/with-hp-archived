import { css } from "@emotion/react";
import React from "react";
import { FaLaptop, FaServer, FaMoneyBillAlt } from "react-icons/fa";

export const ActivitySection: React.VFC = React.memo((): JSX.Element => {
  return (
    <div css={styles["activitySectionContainer"]}>
      <div className={"container"} css={styles["activitySection"]}>
        <h3 css={styles["title"]}>withの活動</h3>
        <div css={styles["activityContainer"]}>
          <img src="images/top1.jpg" alt="" css={styles["media"]} />
          <div css={styles["activityContentContainer"]}>
            <div css={styles["activityTitleContainer"]}>
              <FaLaptop size={"3em"} color={"#27e1ce"} css={styles["activityTitleIcon"]} />
              <h3 css={styles["activityTitle"]}>
                鯖江市地域活性化プランコンテスト
                <br />
                市長をやりませんか？ - Be a Mayor of Sabae City -
              </h3>
            </div>
            <p css={styles["activityDescription"]}>
              参加者が鯖江市長となって鯖江をより良くするためのプランを考えるコンテストです。
              地域の活性化に本気で取り組むことのできる学生の参加を募集しています。
            </p>
          </div>
        </div>
        <div css={styles["activityContainer"]}>
          <img src="images/kyoeikai.jpg" alt="" css={styles["media"]} />
          <div css={styles["activityContentContainer"]}>
            <div css={styles["activityTitleContainer"]}>
              <FaServer size={"3em"} color={"#27e1ce"} css={styles["activityTitleIcon"]} />
              <h3 css={styles["activityTitle"]}>
                日中友好事業
                <br />
                ～絆プロジェクト～
              </h3>
            </div>
            <p css={styles["activityDescription"]}>
              「通称：京英会」第４回プランコンテストで採用、実現されたプラン。
              中国人留学生と日本の学生との交流を主に行い、 北京会期、東京会期、鯖江会期などがあります。
            </p>
          </div>
        </div>
        <div css={styles["activityContainer"]}>
          <img src="images/megane_guinness.jpg" alt="" css={styles["media"]} />
          <div css={styles["activityContentContainer"]}>
            <div css={styles["activityTitleContainer"]}>
              <FaMoneyBillAlt size={"3em"} color={"#27e1ce"} css={styles["activityTitleIcon"]} />
              <h3 css={styles["activityTitle"]}>
                さばえめがねギネス2011
                <br />
                ギネス世界記録を樹立
              </h3>
            </div>
            <p css={styles["activityDescription"]}>
              「さばえめがねギネス2011」第１回鯖江市地域活性化プランコンテストで提案されたプランにより実現しました。
              「市民でつなぎ市民で挑戦！」挑戦したのは２０１１メートル！みごとギネス達成しました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

const styles = {
  activitySectionContainer: css`
    padding: 5em 0;
  `,
  activitySection: css`
    display: flex;
    flex-direction: column;
    gap: 2em;
  `,
  title: css`
    text-align: center;
    margin-bottom: 32px;
  `,
  activityContainer: css`
    display: flex;
    align-items: flex-start;
  `,
  media: css`
    width: 300px;
    object-fit: fill;
    margin-right: 32px;
  `,
  activityContentContainer: css`
    display: flex;
    flex-direction: column;
  `,
  activityTitleContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  `,
  activityTitle: css`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  `,
  activityTitleIcon: css`
    margin-right: 24px;
  `,
  activityDescription: css`
    color: #7f7f7f;
  `,
};