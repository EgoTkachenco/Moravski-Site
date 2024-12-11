import {
  Block,
  BlockColumn,
  BlockName,
  BlockTitle,
  BlockImage,
  BlockSubTitle,
} from '@/ui'

const TextBlock = (props) => {
  const { title, subtitle, content, block_name, image, layout } = props

  if (layout === 'image bottom')
    return (
      <Block className="flex flex-wrap">
        <BlockName>{block_name}</BlockName>

        <BlockColumn>
          <BlockTitle>{title}</BlockTitle>
          <BlockSubTitle>{subtitle}</BlockSubTitle>
        </BlockColumn>
        <BlockColumn dangerouslySetInnerHTML={{ __html: content }} />

        <BlockImage image={image} alt={title} />
      </Block>
    )

  if (layout === 'image left')
    return (
      <Block className="flex flex-wrap">
        <BlockName>{block_name}</BlockName>

        <BlockImage isColumn image={image} alt={title} />

        <BlockColumn>
          <BlockTitle>{title}</BlockTitle>
          <div>{subtitle}</div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </BlockColumn>
      </Block>
    )

  if (layout === 'image right')
    return (
      <Block className="flex flex-wrap">
        <BlockName>{block_name}</BlockName>

        <BlockColumn>
          <BlockTitle>{title}</BlockTitle>
          <div>{subtitle}</div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </BlockColumn>
        <BlockImage isColumn image={image} alt={title} />
      </Block>
    )

  return 'unknown layout'
}

export default TextBlock
