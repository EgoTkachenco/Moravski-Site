import BannerBlock from '@/components/blocks/BannerBlock'
import StrapiBlock from '@/components/blocks/StrapiBlock'
import Layout from '@/components/layout'
import { getPageProps } from '@/utils'

export default function Home({ page, general }) {
  console.log(page)

  return (
    <Layout general={general} page={page} animated>
      <BannerBlock />

      {page.blocks.map((block, index) => (
        <StrapiBlock key={index} block={block} />
      ))}
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const props = getPageProps(ctx, 'home', true)
  if (!props)
    return {
      redirect: {
        destination: '/not-found',
        permanent: false,
      },
    }

  return {
    props,
  }
}
