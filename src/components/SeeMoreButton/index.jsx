import React from 'react'
import { Link } from 'wouter'

function SeeMoreButton() {
  return (
    <Link
      to="/gif/trending/"
      className="absolute -right-2 top-0 inline-flex items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick sm:right-0"
    >
      See more...
    </Link>
  )
}

export default React.memo(SeeMoreButton)
