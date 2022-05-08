import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Parser from "rss-parser";
import { RssFeed } from "~/@types/ameblo";
import { SettingsResponse } from "~/@types/cms/endpoints/SettingsResponse";
import { ActivitySection } from "~/components/ActivitySection";
import { BlogSection } from "~/components/BlogSection";
import { HeaderCover } from "~/components/HeaderCover";
import { Information } from "~/components/Information";
import { MainLayout } from "~/layout/MainLayout";
import { cmsClient } from "~/libs/cmsClient";

type Props = {
  imagePath: string;
  rssFeed: RssFeed;
};

export const Home: NextPage<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>学生団体with</title>
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

export const getStaticProps: GetStaticProps<Props> = async (_context): Promise<{ props: Props }> => {
  const parser: Parser<RssFeed, Error> = new Parser<RssFeed, Error>();
  const rssFeed = await parser.parseURL("http://rssblog.ameba.jp/gakuren/rss20.xml");

  const response: SettingsResponse = await cmsClient.get<SettingsResponse>({ endpoint: "settings" });

  return {
    props: { rssFeed: rssFeed, imagePath: response.headerCoverImage.url },
  };
};

export default Home;
