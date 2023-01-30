import React from 'react'
import { Link } from 'wouter'

function TitleCarousel({ title, to }) {
  return (
    <div className="relative py-4 text-center">
      <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">{title}</span>
      </h1>
      <Link
        to={`/${to}/trending/`}
        className="absolute -right-2 top-0 w-28 justify-center
        gap-2 rounded bg-[#00FFFF]/70 py-2.5 text-sm font-semibold uppercase
        tracking-[1px] text-slate-900 shadow-button transition-all duration-300
        hover:scale-[1.02] hover:bg-[#00ddff] hover:shadow-buttonHover sm:right-0"
      >
        See more...
      </Link>
    </div>
  )
}

export default React.memo(TitleCarousel)
