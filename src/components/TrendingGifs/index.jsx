import React from 'react'
import { Link } from 'wouter'

function TrendingGifs({ id, url }) {
  return (
    <>
      <li className="mb-4 cursor-pointer text-center">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-xl border border-[#ebbcba] object-cover dark:border-[#26233a] md:h-44"
          />
        </Link>
      </li>
    </>
  )
}

export default React.memo(TrendingGifs)