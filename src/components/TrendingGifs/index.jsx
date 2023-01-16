import React from 'react'
import { Link } from 'wouter'

function TrendingGifs({ id, url }) {
  return (
    <>
      <li className="samina mb-4 overflow-hidden rounded-md bg-[#EAE4E9] text-center transition-all duration-200">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            loading="lazy"
            decoding="async"
            className="h-80 w-full object-cover md:h-44"
          />
        </Link>
      </li>
    </>
  )
}

export default React.memo(TrendingGifs)
