import React from 'react'
import { Link } from 'wouter'

function Stickers({ title, id, url }) {
  return (
    <>
      <li className="mb-4 text-center">
        <Link key={id} to={`/stickers/${id}`}>
          <img
            src={url}
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-xl border border-rose object-cover dark:border-overlay md:h-44"
          />
        </Link>
      </li>
    </>
  )
}

export default React.memo(Stickers)
