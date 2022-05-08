import Head from "next/head";
import React from "react";
import { RssFeed } from "~/@types/RssFeed";
import { ActivitySection } from "~/components/blocks/ActivitySection";
import { BlogSection } from "~/components/blocks/BlogSection";
import { HeaderCover } from "~/components/blocks/HeaderCover";
import { Information } from "~/components/blocks/Information";
import { MainLayout } from "~/layout/MainLayout";

type Props = {
  rssFeed: RssFeed;
};

export const Home: React.VFC<Props> = React.memo(({ rssFeed }): JSX.Element => {
  return (
    <>
      <Head>
        <title>学生団体with | トップページ</title>
      </Head>
      <MainLayout>
        <HeaderCover />
        <Information />
        <BlogSection rssFeed={rssFeed} />
        <ActivitySection />
      </MainLayout>
    </>
  );
});
