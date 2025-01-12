'use client'
import { useText } from '@/locales'
import { Block, BlockTitle, Input, Button, Checkbox } from '@/ui'
import { useForm } from '@mantine/form'

const ContactForm = ({ onSubmit }) => {
  const t = useText()
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      isAgree: false,
    },
    validate: {
      name: (value) => (value ? null : t('contact-form-name-error')),
      phone: (value) => (value ? null : t('contact-form-phone-error')),
      email: (value) => {
        if (!value) return t('contact-form-mail-error')
        if (!/^\S+@\S+$/.test(value))
          return t('contact-form-mail-error-invalid')
        return null
      },
      message: (value) => (value ? null : t('contact-form-message-error')),
      isAgree: (value) => (value ? null : t('contact-form-agree')),
    },
  })

  const onFormSubmit = form.onSubmit((values) => {
    console.log(values)
    onSubmit?.(values)
  })

  return (
    <Block>
      <div className="bg-[url('/contact_back.svg')] bg-cover p-6 md:p-12 text-dark">
        <BlockTitle>{t('contact-form-title')}</BlockTitle>
        <div className="mb-8 text-xl font-medium">{t('contact-form-text')}</div>

        <form onSubmit={onFormSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <Input
              label={t('contact-form-name-label')}
              placeholder={t('contact-form-name-placeholder')}
              {...form.getInputProps('name')}
            />
            <Input
              label={t('contact-form-phone-label')}
              placeholder={t('contact-form-phone-placeholder')}
              {...form.getInputProps('phone')}
            />
            <Input
              label={t('contact-form-mail-label')}
              placeholder={t('contact-form-mail-placeholder')}
              {...form.getInputProps('email')}
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Input
              label={t('contact-form-message-label')}
              placeholder={t('contact-form-message-placeholder')}
              {...form.getInputProps('message')}
            />
            <Button type="submit" className="min-w-[33%]">
              {t('contact-form-send')}
            </Button>
          </div>
          <Checkbox
            label={t('contact-form-agree')}
            {...form.getInputProps('isAgree')}
          />
        </form>
      </div>
    </Block>
  )
}

export default ContactForm
