import Head from 'next/head'

const Metadata = ({ page, general }) => {
  return (
    <Head>
      <title>{page.metadata.title || general.metadata.title}</title>
      <meta
        name="description"
        content={page.metadata.description || general.metadata.description}
      />
    </Head>
  )
}

export default Metadata
