import { GetStaticProps, NextPage } from 'next'
import Parser from 'rss-parser'

const RssReader: NextPage = (props) => {
  return <>{props.rss.title}</>
}

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser()

  const feed = await parser.parseURL('http://rssblog.ameba.jp/gakuren/rss20.xml')
  return {
    props: { rss: feed },
  }
}

export default RssReader
