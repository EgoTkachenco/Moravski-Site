import { getConcert } from '@/api'
import Layout from '@/components/layout'
import { getPageProps } from '@/utils'
import PostView from '@/components/common/PostView'

const ConcertPage = ({ general, page, concert }) => {
  return (
    <Layout general={general} page={page}>
      <PostView {...concert} />
    </Layout>
  )
}

export default ConcertPage

export async function getServerSideProps(ctx) {
  const props = await getPageProps(ctx, 'concerts', true)
  props.concert = await getConcert(ctx.params.id, ctx.locale)
    .then((res) => res.data)
    .catch(() => null)

  if (!props || !props.concert)
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
