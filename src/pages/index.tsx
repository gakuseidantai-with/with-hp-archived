import { NextPage } from 'next'
import Header from 'src/components/Header/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <p>ここはwithのホームページです</p>
    </div>
  )
}

export default Home
