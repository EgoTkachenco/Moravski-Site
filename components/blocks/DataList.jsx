import { Block, BlockTitle } from '@/ui'
import Image from 'next/image'

const DataList = ({ title, data = [] }) => {
  return (
    <Block>
      <BlockTitle>{title}</BlockTitle>
      <div className="grid grid-cols-3 gap-12">
        {data.map((card) => (
          <div className="flex flex-col gap-4" key={card.id}>
            <Image
              src={card.image.url}
              width={card.image.width}
              height={card.image.height}
              className="aspect-square object-cover"
              alt={card.title}
            />
            <h5 className="text-3xl mb-4 font-semibold">{card.title}</h5>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col md:flex-row gap-8"></div> */}
    </Block>
  )
}

export default DataList
