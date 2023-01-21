import React from 'react'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'wouter'

function GoBackButton() {
  return (
    <div className="pb-4">
      <Link to="/" className="group font-semibold">
        <span className="inline-flex cursor-pointer items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick">
          <IoChevronBack />
          Go back
        </span>
      </Link>
    </div>
  )
}

export default React.memo(GoBackButton)
