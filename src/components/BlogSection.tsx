import { css } from "linaria";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Moment from "react-moment";
import { Article, RssFeed } from "~/@types/ameblo";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

type Props = {
  rssFeed: RssFeed;
};

export const BlogSection: React.FC<Props> = React.memo(({ rssFeed }): JSX.Element => {
  // ブログリスト保持用
  const [articleList, setArticleList] = useState<Article[]>([]);
  // サムネイル抽出用正規表現
  const thumbnailLinkRegex = useMemo((): RegExp => /src="(https:\/\/.*?(.png|.jpe?g).*?)"/, []);
  // 初期表示時のブログリスト生成
  useEffect(() => {
    // 記事リストに追加
    setArticleList(
      rssFeed.items.slice(0, 6).map((item) => {
        // サムネイル用URLを本文から全件取得
        const thumbnailLinkList: RegExpMatchArray | null = item.content.match(new RegExp(thumbnailLinkRegex, "g"));
        // 本文の一番最後に使われている画像をサムネイルとする
        const thumbnailLink: string = (thumbnailLinkList && thumbnailLinkList.slice(-1)[0]) ?? "";
        // 記事モデルにマッピング
        return {
          title: item.title,
          link: item.link,
          description: `${item.content
            .replace(/<[^>]+>/g, "")
            .trim()
            .slice(0, 35)}...`,
          content: item.content,
          date: item.pubDate,
          thumbnailLink: thumbnailLinkRegex.exec(thumbnailLink)?.[1] ?? "/images/with_logo.jpg",
        };
      })
    );
  }, [rssFeed.items, thumbnailLinkRegex]);

  return (
    <div className={styles["blogContainer"]}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className={styles["sectionTitle"]}>withブログ</h2>
            <p className={styles["sectionSubTitle"]}>
              会議での出来事や、イベント情報などを発信中です。
              <br />※ 最新の6記事を表示しています
            </p>
          </div>
          {articleList.map((article, index) => (
            <div key={index} className={clsx("col-md-6", styles["cardView"])}>
              <a href={article.link} className={styles["cardLink"]} target="_blank" rel="noreferrer">
                <img alt={article.title} src={article.thumbnailLink} className={styles["thumbnail"]} />
                <div className={styles["content"]}>
                  <h3 className={styles["title"]}>{article.title}</h3>
                  <Moment format="YYYY/MM/DD" className={styles["publishDate"]}>
                    {article.date}
                  </Moment>
                  <h5 className={styles["description"]}>{article.description}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className={styles["readMoreButtonContainer"]}>
          <Link href="/blog">
            <a className={clsx("btn", "btn-primary", styles["readMoreButton"])}>
              もっとみる
              <FaArrowRight className="icon" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
});

const styles = {
  blogContainer: css`
    padding: 7em 0;
    background: rgba(0, 0, 0, 0.03);
  `,
  sectionTitle: css`
    font-family: "Raleway", Arial, sans-serif;
    text-align: center;
    margin-bottom: 12px;
  `,
  sectionSubTitle: css`
    margin-bottom: 30px;
    text-align: center;
    color: #7f7f7f;
  `,
  cardView: css`
    height: 400px;
    margin-bottom: 50px;
  `,
  cardLink: css`
    width: 100%;
    height: 100%;
    float: left;
    text-decoration: none;
    border-radius: 20px;
    position: relative;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.11);
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 14px 25px -2px rgba(0, 0, 0, 0.14);
    }
  `,
  thumbnail: css`
    width: 100%;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    object-fit: cover;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 30px 30px 0 30px;
    text-align: center;
  `,
  title: css`
    color: #000;
    font-weight: 600;
    font-weight: 700;
    font-size: 18px;
  `,
  description: css`
    color: rgba(0, 0, 0, 0.3);
    line-height: 21px;
    font-size: 16px;
    margin-bottom: 30px;
  `,
  publishDate: css`
    color: rgba(0, 0, 0, 0.3);
    display: block;
  `,
  readMoreButtonContainer: css`
    text-align: center;
    margin-bottom: 36px;
  `,
  readMoreButton: css`
    width: 125px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: #27e1ce;
    color: #fff;
    border: 2px solid #27e1ce;
    border-radius: 30px;
    .icon {
      display: none;
      opacity: 0;
    }
    &:hover {
      width: 155px;
      background: #3de4d3;
      border-color: #3de4d3;
      .icon {
        right: 18px;
        display: inline-block;
        opacity: 1;
      }
    }
  `,
};
