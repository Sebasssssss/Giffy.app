import React from 'react'
import { IoArrowDown } from 'react-icons/io5/'

function LastSearchTitle() {
  return (
    <div className="mt-8 py-4">
      <h1 className="fancy text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-flex items-center gap-2">
          <IoArrowDown /> Last search <IoArrowDown />
        </span>
      </h1>
    </div>
  )
}

export default React.memo(LastSearchTitle)
