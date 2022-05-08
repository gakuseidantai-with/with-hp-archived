import { GetStaticProps, NextPage } from "next";
import { Params } from "next/dist/server/router";
import Head from "next/head";
import Parser from "rss-parser";
import { RssFeed } from "~/@types/RssFeed";
import { ActivitySection } from "~/components/ActivitySection";
import { BlogSection } from "~/components/BlogSection";
import { HeaderCover } from "~/components/HeaderCover";
import { Information } from "~/components/Information";
import { MainLayout } from "~/layout/MainLayout";

type Props = {
  imagePath: string;
  rssFeed: RssFeed;
};

export const Home: NextPage<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>学生団体with | トップページ</title>
      </Head>
      <MainLayout>
        <HeaderCover imagePath={props.imagePath} />
        <Information />
        <BlogSection rssFeed={props.rssFeed} />
        <ActivitySection />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async (_context): Promise<{ props: Props }> => {
  const parser: Parser<RssFeed, Error> = new Parser<RssFeed, Error>();
  const rssFeed = await parser.parseURL("http://rssblog.ameba.jp/gakuren/rss20.xml");
  return {
    props: { rssFeed: rssFeed, imagePath: "/images/top2019_o.png" },
  };
};

export default Home;
