import React from 'react'
import { Link } from 'wouter'

function TrendingGifs({ id, url }) {
  return (
    <>
      <div className="mb-4 cursor-pointer rounded-md border border-blue-900/20 text-center shadow-card transition-all duration-200 hover:shadow-cardHover dark:border-[#3E2C41] dark:shadow-cardDark dark:hover:shadow-cardDarkHover">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            alt={id}
            className="h-80 w-full rounded-md object-cover md:h-44"
          />
        </Link>
      </div>
    </>
  )
}

export default React.memo(TrendingGifs, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
