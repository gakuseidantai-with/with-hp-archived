import clsx from "clsx";
import { css } from "linaria";
import React from "react";
import { FaLaptop, FaHandshake, FaMoneyBillAlt } from "react-icons/fa";

export const ActivitySection: React.FC = React.memo((): JSX.Element => {
  return (
    <div className={styles["activitySectionContainer"]}>
      <div className={clsx("container", styles["activitySection"])}>
        <h3 className={styles["title"]}>withの活動</h3>
        <div className={styles["activityContainer"]}>
          <img src="images/top1.jpg" alt="" className={styles["media"]} />
          <div className={styles["activityContentContainer"]}>
            <div className={styles["activityTitleContainer"]}>
              <FaLaptop size={"3em"} color={"#27e1ce"} className={styles["activityTitleIcon"]} />
              <h3 className={styles["activityTitle"]}>
                鯖江市地域活性化プランコンテスト
                <br />
                市長をやりませんか？ - Be a Mayor of Sabae City -
              </h3>
            </div>
            <p className={styles["activityDescription"]}>
              参加者が鯖江市長となって鯖江をより良くするためのプランを考えるコンテストです。
              地域の活性化に本気で取り組むことのできる学生の参加を募集しています。
            </p>
          </div>
        </div>
        <div className={styles["activityContainer"]}>
          <img src="images/kyoeikai.jpg" alt="" className={styles["media"]} />
          <div className={styles["activityContentContainer"]}>
            <div className={styles["activityTitleContainer"]}>
              <FaHandshake size={"3em"} color={"#27e1ce"} className={styles["activityTitleIcon"]} />
              <h3 className={styles["activityTitle"]}>
                日中友好事業
                <br />
                ～絆プロジェクト～
              </h3>
            </div>
            <p className={styles["activityDescription"]}>
              「通称：京英会」第４回プランコンテストで採用、実現されたプラン。
              中国人留学生と日本の学生との交流を主に行い、 北京会期、東京会期、鯖江会期などがあります。
            </p>
          </div>
        </div>
        <div className={styles["activityContainer"]}>
          <img src="images/megane_guinness.jpg" alt="" className={styles["media"]} />
          <div className={styles["activityContentContainer"]}>
            <div className={styles["activityTitleContainer"]}>
              <FaMoneyBillAlt size={"3em"} color={"#27e1ce"} className={styles["activityTitleIcon"]} />
              <h3 className={styles["activityTitle"]}>
                さばえめがねギネス2011
                <br />
                ギネス世界記録を樹立
              </h3>
            </div>
            <p className={styles["activityDescription"]}>
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

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  media: css`
    width: 300px;
    object-fit: fill;
    margin-right: 32px;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-right: 0;
    }
  `,
  activityContentContainer: css`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  `,
  activityTitleContainer: css`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin-bottom: 12px;

    @media screen and (max-width: 768px) {
      margin-top: 16px;
      margin-bottom: 12px;
    }
  `,
  activityTitle: css`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  `,
  activityTitleIcon: css`
    width: 3em;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
      margin-right: 12px;
    }
  `,
  activityDescription: css`
    color: #7f7f7f;
  `,
};
