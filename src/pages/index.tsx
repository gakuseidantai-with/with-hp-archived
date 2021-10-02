import { GetStaticProps, NextPage } from "next";
import Parser from "rss-parser";
import { RssFeed } from "~/@types/RssFeed";
import { Home as Component } from "~/components/pages/Home";

type Props = {
  rssFeed: RssFeed;
};

const Home: NextPage<Props> = (props) => {
  return <Component {...props} />;
};

export const getStaticProps: GetStaticProps<Props> = async (_context): Promise<{ props: Props }> => {
  const parser: Parser<RssFeed, Error> = new Parser<RssFeed, Error>();
  const rssFeed = await parser.parseURL("http://rssblog.ameba.jp/gakuren/rss20.xml");
  return {
    props: { rssFeed },
  };
};

export default Home;
