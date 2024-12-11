import BannerBlock from '@/components/blocks/BannerBlock'
import StrapiBlock from '@/components/blocks/StrapiBlock'
import Layout from '@/components/layout'
import { getPageProps } from '@/utils'

export default function Home({ page, general }) {
  const bannerBlock = page.blocks[0]

  return (
    <Layout general={general} page={page} animated>
      <BannerBlock block={bannerBlock} />

      {page.blocks.slice(1).map((block, index) => (
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
