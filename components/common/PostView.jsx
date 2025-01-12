import { formatDate } from '@/utils'
import { Block, BlockColumn, BlockImage, BlockName, BlockTitle } from '@/ui'
import { useLocale } from '@/locales'
import SupportBanner from '@/components/common/SupportBanner'

const PostView = ({ title, content, image, date, description }) => {
  const { locale } = useLocale()
  return (
    <Block className="flex flex-wrap">
      <BlockColumn className="w-full">
        <BlockName>{formatDate(date, locale)}</BlockName>
        <BlockTitle>{title}</BlockTitle>
      </BlockColumn>
      <BlockColumn className="grow">
        <BlockImage image={image} alt={title} />
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: content }} />
      </BlockColumn>

      <BlockColumn className="w-full md:w-[350px]">
        <SupportBanner />
      </BlockColumn>
    </Block>
  )
}

export default PostView
