import TextBlock from './TextBlock'
import CountersBlock from './CountersBlock'
import CardsList from './CardsList'
import CarouselBlock from './CarouselBlock'
import SupportBlock from './SupportBlock'
import DataList from './DataList'

const StrapiBlock = ({ block }) => {
  switch (block.__component) {
    case 'blocks.text-block':
      return <TextBlock {...block} />

    case 'blocks.counter-list':
      return <CountersBlock {...block} />

    case 'blocks.card-list':
      return <CardsList {...block} />

    case 'blocks.carousel':
      return <CarouselBlock {...block} />

    case 'blocks.support-block':
      return <SupportBlock {...block} />

    case 'blocks.data-list':
      return <DataList {...block} />

    default:
      console.log(block.__component)

      return 'unknown block'
  }
}

export default StrapiBlock
