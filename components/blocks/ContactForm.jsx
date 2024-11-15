import { useText } from '@/locales'
import { Block, BlockSubTitle, BlockTitle } from '@/ui'

const ContactForm = ({}) => {
  const t = useText()
  return (
    <Block>
      <div className="bg-[url('/contact_back.svg')] bg-cover p-12 text-dark">
        <BlockTitle>{t('contact-form-title')}</BlockTitle>
        <div className="text-xl font-medium">{t('contact-form-text')}</div>
      </div>
    </Block>
  )
}

export default ContactForm
