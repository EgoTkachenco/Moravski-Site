import { getConcerts } from '@/api'
import Layout from '@/components/layout'
import { getPageProps } from '@/utils'
import { Block, BlockTitle, List } from '@/ui'
import PostCard from '@/components/common/PostCard'

export default function ConcertsPage({ page, general, concerts }) {
  return (
    <Layout general={general} page={page}>
      <Block>
        <BlockTitle>{page.title}</BlockTitle>
        <List
          items={concerts.data}
          renderItem={(concert) => (
            <PostCard
              key={concert.id}
              href={'/concerts/' + concert.documentId}
              {...concert}
            />
          )}
          pagination={concerts.meta.pagination}
        />
      </Block>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const props = await getPageProps(ctx, 'concerts', true)
  props.concerts = await getConcerts(ctx.locale, ctx.query.page || 1)

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
