import { useText } from '@/locales'
import { Button, Input } from '@/ui'
import { useForm } from '@mantine/form'

const DONATE_AMOUNTS = [50, 100, 200, 500, 1000]

const SupportForm = () => {
  const t = useText()
  const form = useForm({
    initialValues: {
      amount: 50,
      type: 'month',
    },
    validate: {
      name: (value) => (value ? null : t('contact-form-name-error')),
      phone: (value) => (value ? null : t('contact-form-phone-error')),
      email: (value) => (value ? null : t('contact-form-mail-error')),
    },
  })
  const onSubmit = form.onSubmit((values) => {
    console.log(values)
  })
  return (
    <form className="flex flex-col gap-8 grow" onSubmit={onSubmit}>
      <div className="flex gap-12">
        <div className="flex w-[250px] gap-8 flex-col">
          <Button
            variant={form.values.type === 'month' ? 'primary' : 'white'}
            onClick={() => form.setFieldValue('type', 'month')}
          >
            {t('month-support')}
          </Button>
          <Button
            variant={form.values.type === 'once' ? 'primary' : 'white'}
            onClick={() => form.setFieldValue('type', 'once')}
          >
            {t('once-support')}
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 gap-y-8 grow">
          {DONATE_AMOUNTS.map((amount) => (
            <Button
              key={amount}
              className="w-full"
              variant={form.values.amount === amount ? 'primary' : 'white'}
              onClick={() => form.setFieldValue('amount', amount)}
            >
              {amount} {t('uah-currency')}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-gray-300" />
      <div className="flex gap-8">
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
      <div className="flex gap-8">
        <Button className="w-[300px]" type="submit">
          {t('contact-form-send')}
        </Button>
        <div className="text-base text-gray-500">{t('support-disable')}</div>
      </div>
    </form>
  )
}

export default SupportForm
