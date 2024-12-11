import { useText } from '@/locales'
import { Block, BlockTitle, Button, Icon } from '@/ui'

const SupportBlock = ({ title }) => {
  const t = useText()
  return (
    <Block>
      <div className="bg-[url(/support_back.svg)] bg-cover p-4 md:p-20">
        <BlockTitle className="md:max-w-xl text-dark">{title}</BlockTitle>

        <div className="flex gap-4">
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
    </Block>
  )
}

export default SupportBlock
