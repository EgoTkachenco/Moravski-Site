import TextBlock from './TextBlock'
import CountersBlock from './CountersBlock'
import CardsList from './CardsList'

const StrapiBlock = ({ block }) => {
  switch (block.__component) {
    case 'blocks.text-block':
      return <TextBlock {...block} />

    case 'blocks.counter-list':
      return <CountersBlock {...block} />

    case 'blocks.card-list':
      return <CardsList {...block} />
    default:
      console.log(block.__component)

      return 'unknown block'
  }
}

export default StrapiBlock
