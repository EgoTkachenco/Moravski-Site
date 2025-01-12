import { useRouter } from 'next/router'
import { useMemo } from 'react'

const List = ({ items, renderItem, pagination }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {items?.map((item, index) => renderItem(item, index))}
      </div>
      {pagination && <Pagination pagination={pagination} />}
    </div>
  )
}

export default List

const Pagination = ({ pagination }) => {
  const router = useRouter()
  const { page: currentPage, pageCount } = pagination

  const handlePageChange = (newPage) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    })
  }

  const pages = useMemo(() => {
    const pagesArray = []

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pagesArray.push(
          <PaginationButton
            key={i}
            page={i}
            currentPage={currentPage}
            onClick={handlePageChange}
          />
        )
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pagesArray.push(
          <span key={i} className="px-2">
            ...
          </span>
        )
      }
    }

    return pagesArray
  }, [currentPage, pageCount])

  return <div className="flex justify-center gap-2 mt-8">{pages}</div>
}

const PaginationButton = ({ page, currentPage, onClick }) => (
  <button
    onClick={() => onClick(page)}
    className={`px-4 py-2 rounded ${
      page === Number(currentPage)
        ? 'bg-black text-white'
        : 'bg-transparent hover:bg-black'
    }`}
  >
    {page}
  </button>
)
