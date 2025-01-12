import Image from 'next/image'
import { forwardRef } from 'react'
import Link from './Link'

const Block = forwardRef(
  ({ className = '', children, containerClassName = '' }, ref) => (
    <div ref={ref} className={`flex flex-col relative ${containerClassName}`}>
      <div
        className={`gap-y-8 gap-x-16 flex-grow w-full p-8 max-w-screen-xl mx-auto md:p-0 md:py-16 text-lg text-white ${className}`}
      >
        {children}
      </div>
    </div>
  )
)

Block.displayName = 'Block'

export default Block

export const BlockName = ({ className = '', children, link = null }) => (
  <div className={`w-full font-bold text-gray-600 ${className}`}>
    {children}

    {link}
  </div>
)

export const BlockTitle = ({ children, className = '' }) => (
  <h2
    className={`text-4xl md:text-5xl font-bold mb-8 md:max-w-3xl ${className}`}
  >
    {children}
  </h2>
)

export const BlockSubTitle = ({ children, className = '' }) => (
  <h4 className={`text-xl font-bold mb-4 ${className}`}>{children}</h4>
)

export const BlockPageLink = ({ children, href, className = '' }) => (
  <Link href={href} className={`font-bold mb-6 ${className}`}>
    {children}
  </Link>
)

export const BlockColumn = ({ children, className = '', ...props }) => (
  <div className={`md:w-[calc(50%-32px)] w-full ${className}`} {...props}>
    {children}
  </div>
)

export const BlockImage = ({ image, alt, isColumn = false }) => {
  if (isColumn)
    return (
      <BlockColumn className="max-h-[800px] relative overflow-hidden">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={alt}
        />
      </BlockColumn>
    )

  return (
    <div className="flex justify-center flex-grow w-full overflow-hidden">
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={alt}
      />
    </div>
  )
}
