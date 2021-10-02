import { css } from "@emotion/react";
import React, { useEffect, useMemo, useState } from "react";
import Moment from "react-moment";
import { Article } from "~/@types/Article";
import { RssFeed } from "~/@types/RssFeed";

type Props = {
  rssFeed: RssFeed;
};

export const BlogSection: React.VFC<Props> = React.memo(({ rssFeed }): JSX.Element => {
  // ブログリスト保持用
  const [articleList, setArticleList] = useState<Article[]>([]);
  // サムネイル抽出用正規表現
  const thumbnailLinkRegex = useMemo((): RegExp => /src="(https:\/\/.*?(.png|.jpe?g).*?)"/, []);
  // 初期表示時のブログリスト生成
  useEffect(() => {
    // RSSから取得できたものを最新6記事分取得
    rssFeed.items.slice(0, 6).forEach((item) => {
      // サムネイル用URLを本文から全件取得
      const thumbnailLinkList: RegExpMatchArray | null = item.content.match(new RegExp(thumbnailLinkRegex, "g"));
      // 本文の一番最後に使われている画像をサムネイルとする
      const thumbnailLink: string = (thumbnailLinkList && thumbnailLinkList.slice(-1)[0]) ?? "";
      // 記事モデルにマッピング
      const article: Article = {
        title: item.title,
        link: item.link,
        description: `${item.content.replace(/<[^>]+>/g, "").slice(0, 35)}...`,
        content: item.content,
        date: item.pubDate,
        thumbnailLink: thumbnailLinkRegex.exec(thumbnailLink)?.[1] ?? "/images/with_logo.jpg",
      };
      // 記事リストに追加
      setArticleList((prev) => {
        return [...prev, article];
      });
    });
  }, [rssFeed.items, thumbnailLinkRegex]);

  return (
    <div className="container" css={styles["blogContainer"]}>
      <div className="row">
        {articleList.map((article, index) => (
          <div key={index} className="col-md-6" css={styles["cardView"]}>
            <a href={article.link} css={styles["cardLink"]}>
              <img alt={article.title} src={article.thumbnailLink} css={styles["thumbnail"]} />
              <div css={styles["content"]}>
                <h3 css={styles["title"]}>{article.title}</h3>
                <h5 css={styles["description"]}>
                  <Moment format="YYYY/MM/DD">{article.date}</Moment>
                  <br />
                  {article.description}
                </h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
});

const styles = {
  blogContainer: css``,
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
    padding: 30px 30px 0 30px;
    text-align: center;
  `,
  title: css`
    color: #000;
    font-weight: 600;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 18px;
  `,
  description: css`
    color: rgba(0, 0, 0, 0.3);
    line-height: 21px;
    font-size: 16px;
    margin-bottom: 30px;
  `,
};
