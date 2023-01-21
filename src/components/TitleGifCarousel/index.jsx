import React from 'react'
import { Link } from 'wouter'

function TitleGifCarousel() {
  return (
    <div className="relative py-4 text-center">
      <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">Trending Gifs</span>
      </h1>
      <Link
        to="/gif/trending/"
        className="absolute -right-2 top-0 inline-flex items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick sm:right-0"
      >
        See more...
      </Link>
    </div>
  )
}

export default React.memo(TitleGifCarousel)
