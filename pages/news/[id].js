import { getPost } from '@/api'
import Layout from '@/components/layout'
import { getPageProps } from '@/utils'
import PostView from '@/components/common/PostView'

const PostPage = ({ general, page, post }) => {
  console.log(post)

  return (
    <Layout general={general} page={page}>
      <PostView {...post} date={post.publishedAt} />
    </Layout>
  )
}

export default PostPage

export async function getServerSideProps(ctx) {
  const props = await getPageProps(ctx, 'news', true)
  props.post = await getPost(ctx.params.id, ctx.locale).then((res) => res.data)

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
