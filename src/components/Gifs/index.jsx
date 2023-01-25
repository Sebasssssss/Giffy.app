import React from 'react'
import { Link } from 'wouter'

function Gifs({ title, id, url }) {
  return (
    <>
      <li className="group mb-4 overflow-hidden rounded-md bg-[#EAE4E9] text-center shadow-card transition-all duration-200 hover:shadow-cardHover dark:border-[#3E2C41] dark:bg-[#5C527F] dark:shadow-cardDark dark:hover:shadow-cardDarkHover">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            className="h-80 w-full object-cover md:h-44"
            alt={title}
          />
          <h1 className="py-2 text-xl font-bold">{title}</h1>
        </Link>
      </li>
    </>
  )
}

export default React.memo(Gifs, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
