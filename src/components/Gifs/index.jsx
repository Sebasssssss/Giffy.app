import React from 'react'
import { Link } from 'wouter'

function Gifs({ title, id, url }) {
  return (
    <>
      <Link key={id} to={`/gif/${id}`}>
        <img
          src={url}
          className="object-cover border border-[#ebbcba] dark:border-[#26233a] rounded-xl w-full h-44 transition-all duration-300"
        />
        <h1 className="text-xl font-bold">{title}</h1>
      </Link>
    </>
  )
}

export default React.memo(Gifs)
