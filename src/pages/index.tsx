import type { NextPage } from 'next'
import HomeBlock from '../components/organisms/Home/HomeBlock'
import { CustomHead } from '../components/templates/CustomHead'
import DefaultPageLayout from '../components/templates/DefaultPageLayout'

const Home: NextPage = () => {
  return (
    <>
      <DefaultPageLayout>
        <CustomHead />
        <HomeBlock />
      </DefaultPageLayout>
    </>
  )
}

export default Home
