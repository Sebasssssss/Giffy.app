import React from 'react'
import { Link } from 'wouter'

function Gifs({ title, id, url }) {
  return (
    <>
      <li className="mb-4 text-center">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            loading="lazy"
            decoding="async"
            className="rounded-xl border border-[#ebbcba] object-cover transition-all duration-300 dark:border-[#26233a] sm:h-44 md:w-full"
          />
          <h1 className="text-xl font-bold">{title}</h1>
        </Link>
      </li>
    </>
  )
}

export default React.memo(Gifs)
