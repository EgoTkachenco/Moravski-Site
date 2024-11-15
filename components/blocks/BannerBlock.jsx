import { useText } from '@/locales'
import { Block, Button, Link } from '@/ui'

const BannerBlock = () => {
  const t = useText()
  return (
    <Block containerClassName="h-screen bg-cover bg-[url(/banner.png)]">
      <div className="font-medium uppercase text-dark mt-24 mb-8">
        <h2 className="text-4xl">{t('chamber-choir')}</h2>
        <h1 className="text-8xl">{t('moravski')}</h1>
      </div>
      <Button variant="dark">{t('join-us')}</Button>

      <Link href="/support" className="text-dark mt-16">
        {t('support-us')}
      </Link>
    </Block>
  )
}

export default BannerBlock
