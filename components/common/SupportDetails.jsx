import { useText } from '@/locales'

const SupportDetails = () => {
  const t = useText()
  return (
    <div className="md:w-[360px] w-full bg-white text-dark p-8 rounded-2xl">
      <div className="mb-8 font-semibold">{t('support-info-title')}</div>
      <Label>{t('support-info-name-label')}:</Label>
      <Text>{t('support-info-name-value')}</Text>
      <Label>{t('support-info-code-label')}:</Label>
      <Text>{t('support-info-code-value')}</Text>
      <Label>{t('support-info-account-label')}:</Label>
      <Text>{t('support-info-account-value')}</Text>
      <Label>{t('support-info-bank-label')}:</Label>
      <Text>{t('support-info-bank-value')}</Text>
    </div>
  )
}

export default SupportDetails

const Label = ({ children }) => {
  return <div className="font-semibold ">{children}</div>
}

const Text = ({ children }) => {
  return <div className="text-base">{children}</div>
}

/*
 <div className={styles.form_info}>
      <div className={styles.form_info_title}>{t('support-info-title')}</div>
      <div className={styles.form_info_label}>
        {t('support-info-name-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-name-value')}
      </div>
      <div className={styles.form_info_label}>
        {t('support-info-code-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-code-value')}
      </div>
      <div className={styles.form_info_label}>
        {t('support-info-account-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-account-value')}
      </div>
      <div className={styles.form_info_label}>
        {t('support-info-bank-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-bank-value')}
      </div>
    </div>

		.form_info {
  width: 360px;
  background: $c-white;
  color: $c-dark;
  padding: 32px 24px;
  border-radius: 20px;
}

.form_info_title {
  font-weight: 600;
  margin-bottom: 30px;
}

.form_info_label {
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
}

.form_info_text {
  font-size: 16px;
  line-height: 28px;
}
*/
