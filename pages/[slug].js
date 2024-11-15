import ContactForm from '@/components/blocks/ContactForm'
import StrapiBlock from '@/components/blocks/StrapiBlock'
import Layout from '@/components/layout'
import { getPageProps } from '@/utils'

export default function DynamicPage({ page, general }) {
  return (
    <Layout general={general} page={page}>
      {page.blocks.map((block, index) => (
        <StrapiBlock key={index} block={block} />
      ))}

      <ContactForm />
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const slug = ctx.params.slug

  const props = getPageProps(ctx, slug)
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
