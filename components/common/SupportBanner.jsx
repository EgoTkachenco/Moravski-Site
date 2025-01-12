import { Button, Icon } from '@/ui'
import { useText } from '@/locales'

const SupportBanner = () => {
  const t = useText()

  return (
    <div className="bg-[url(/support_back.svg)] bg-cover p-4 md:p-6">
      <h3 className="mb-4 text-3xl font-bold text-dark">{t('want-support')}</h3>
      <div className="text-lg text-dark">{t('support-description')}</div>

      <div className="flex flex-col items-stretch gap-4 mt-8">
        <Button>{t('support-us')}</Button>
        <Button variant="white">
          <Icon icon="buymeacoffee" />
          Buy me a coffee
        </Button>
        <Button variant="dark">
          <Icon icon="ua" />
          Support Ukraine
        </Button>
      </div>
    </div>
  )
}

export default SupportBanner
