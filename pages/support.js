import Layout from '@/components/layout'
import SupportForm from '@/components/common/SupportForm'
import { Block, BlockSubTitle, BlockTitle } from '@/ui'
import { useText } from '@/locales'
import { getPageProps } from '@/utils'
import SupportDetails from '@/components/common/SupportDetails'

const Support = ({ page, general }) => {
  const t = useText()

  return (
    <Layout page={page} general={general}>
      <Block>
        <BlockTitle>{t('want-support')}</BlockTitle>
        <BlockSubTitle>{t('support-description')}</BlockSubTitle>

        <div className="flex flex-col items-start gap-16 mt-16 md:flex-row">
          <SupportForm />
          <SupportDetails />
        </div>
      </Block>
    </Layout>
  )
}

export default Support

export async function getServerSideProps(ctx) {
  const props = await getPageProps(ctx, 'support', true)
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
