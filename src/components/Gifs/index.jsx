import React from 'react'
import { Link } from 'wouter'
import './styles.css'

function Gifs({ title, id, url }) {
  return (
    <>
      <li className="samina mb-4 overflow-hidden rounded-md bg-[#EAE4E9] text-center transition-all duration-200 group">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            loading="lazy"
            decoding="async"
            className="h-80 w-full object-cover md:h-44"
          />
          <h1 className="py-2 text-xl font-bold">{title}</h1>
        </Link>
      </li>
    </>
  )
}

export default React.memo(Gifs)
