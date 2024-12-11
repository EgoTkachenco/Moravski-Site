import Layout from '@/components/layout'
import { getPageProps } from '@/utils'

export default function NewsPage({ page, general }) {
  return (
    <Layout general={general} page={page} animated>
      hello worlds
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const props = getPageProps(ctx, 'news', true)
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
