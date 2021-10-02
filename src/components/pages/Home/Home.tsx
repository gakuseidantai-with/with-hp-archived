import Head from "next/head";
import React from "react";
import { RssFeed } from "~/@types/RssFeed";
import { BlogSection } from "~/components/blocks/BlogSection";
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
        <BlogSection rssFeed={rssFeed} />
      </MainLayout>
    </>
  );
});
