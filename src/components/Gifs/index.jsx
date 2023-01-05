import React from 'react'
import { Link } from 'wouter'

function Gifs({ title, id, url }) {
  return (
    <>
      <li className="text-center mb-4">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            width="1440"
            height="720"
            loading="lazy"
            decoding="async"
            className="object-cover border border-[#ebbcba] dark:border-[#26233a] rounded-xl md:w-full sm:h-44 transition-all duration-300"
          />
          <h1 className="text-xl font-bold">{title}</h1>
        </Link>
      </li>
    </>
  )
}

export default React.memo(Gifs)
