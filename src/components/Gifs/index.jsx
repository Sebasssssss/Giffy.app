import React from 'react'
import { Link } from 'wouter'

function Gifs({ title, id, url }) {
  return (
    <>
      <li className="relative mb-4 h-80 overflow-hidden rounded-[1rem] border border-slate-700 text-center text-text shadow-md shadow-slate-700 md:h-44">
        <Link key={id} to={`/gif/${id}`}>
          <img src={url} className="h-full w-full object-cover" alt={title} />
          <h1 className="text-md absolute -bottom-1 left-0 z-10 w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-sm">
            {title}
          </h1>
        </Link>
      </li>
    </>
  )
}

export default React.memo(Gifs, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
