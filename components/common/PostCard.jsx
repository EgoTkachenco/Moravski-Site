import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/ui'

const PostCard = ({ id, image, title, description = '', href }) => {
  return (
    <Link href={href} className="flex flex-col gap-4 cursor-pointer group">
      <div className="overflow-hidden">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          className="object-cover transition-all aspect-square hover:scale-105"
          alt={title}
        />
      </div>
      <div className="flex items-start justify-between gap-4 mb-4">
        <h5 className="text-3xl font-semibold">{title}</h5>
        <div className="p-2 transition-opacity opacity-0 group-hover:opacity-100">
          <Icon icon="link" className="fill-white size-4" />
        </div>
      </div>
      {description && <p>{description}</p>}
    </Link>
  )
}

export default PostCard
