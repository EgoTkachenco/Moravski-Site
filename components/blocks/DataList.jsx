import { useText } from '@/locales'
import { Block, BlockTitle, BlockPageLink } from '@/ui'
import PostCard from '../common/PostCard'

const DataList = ({ title, page, data = [] }) => {
  const t = useText()
  return (
    <Block>
      <div className="flex flex-col-reverse items-end justify-between md:flex-row">
        <BlockTitle>{title}</BlockTitle>
        {page && (
          <BlockPageLink className="mb-6" href={'/' + page.slug}>
            {t('see-all')}
          </BlockPageLink>
        )}
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
        {data.map((card) => (
          <PostCard
            key={card.id}
            href={'/news/' + card.documentId}
            title={card.title}
            image={card.image}
          />
        ))}
      </div>
    </Block>
  )
}

export default DataList
