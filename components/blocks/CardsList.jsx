import { Block, BlockTitle } from '@/ui'

const CardsList = ({ title, cards }) => (
  <Block>
    <BlockTitle>{title}</BlockTitle>
    <div className="flex flex-col md:flex-row gap-8">
      {cards.map((card) => (
        <div className="px-8 py-10 bg-light text-dark grow" key={card.id}>
          <h5 className="text-3xl mb-4 font-semibold">{card.title}</h5>
          <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: card.content }}
          />
        </div>
      ))}
    </div>
  </Block>
)

export default CardsList
