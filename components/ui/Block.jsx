import Image from 'next/image'
import { forwardRef } from 'react'

const Block = forwardRef(
  ({ className = '', children, containerClassName = '' }, ref) => (
    <div ref={ref} className={`flex flex-col relative ${containerClassName}`}>
      <div
        className={`gap-y-8 gap-x-16 flex-grow max-w-screen-2xl w-full p-8 md:p-16 mx-auto text-lg text-white ${className}`}
      >
        {children}
      </div>
    </div>
  )
)

Block.displayName = 'Block'

export default Block

export const BlockName = ({ children, link = null }) => (
  <div className="w-full font-bold text-gray-600">
    {children}

    {link}
  </div>
)

export const BlockTitle = ({ children, className = '' }) => (
  <h2 className={`text-4xl font-bold mb-6 ${className}`}>{children}</h2>
)

export const BlockSubTitle = ({ children, className = '' }) => (
  <h4 className={`text-xl font-bold mb-4 ${className}`}>{children}</h4>
)

export const BlockColumn = ({ children, className = '', ...props }) => (
  <div className={`w-[calc(50%-32px)] ${className}`} {...props}>
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
    <div className="flex justify-center w-full flex-grow overflow-hidden">
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={alt}
      />
    </div>
  )
}
