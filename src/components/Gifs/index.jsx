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
            className="h-80 w-full rounded-xl border border-[#ebbcba] object-cover dark:border-[#26233a] md:h-44"
          />
          <h1 className="text-xl font-bold">{title}</h1>
        </Link>
      </li>
    </>
  )
}

export default React.memo(Gifs)
