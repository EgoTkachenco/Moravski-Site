import { getPosts } from '@/api'
import Layout from '@/components/layout'
import { getPageProps } from '@/utils'
import { Block, BlockTitle, List } from '@/ui'
import PostCard from '@/components/common/PostCard'
import { useText } from '@/locales'

export default function NewsPage({ page, general, posts }) {
  const t = useText()
  console.log(posts)

  return (
    <Layout general={general} page={page}>
      <Block>
        <BlockTitle>{page.title}</BlockTitle>
        <List
          items={posts.data}
          renderItem={(post) => (
            <PostCard
              key={post.id}
              href={'/news/' + post.documentId}
              {...post}
            />
          )}
          pagination={posts.meta.pagination}
        />
      </Block>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const props = await getPageProps(ctx, 'news', true)
  props.posts = await getPosts(ctx.locale, ctx.query.page || 1)

  console.log(props)
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
