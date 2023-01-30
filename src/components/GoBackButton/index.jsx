import React from 'react'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'wouter'

function GoBackButton() {
  return (
    <div className="pb-4">
      <Link
        to="/"
        className="inline-flex w-28 items-center justify-center
        gap-2 rounded bg-[#00FFFF]/70 py-3 text-sm font-semibold uppercase
        tracking-[1px] text-slate-900 shadow-button transition-all duration-300
        hover:scale-[1.02] hover:bg-[#00ddff] hover:shadow-buttonHover"
      >
        <IoChevronBack />
        <span>Go back</span>
      </Link>
    </div>
  )
}

export default React.memo(GoBackButton)
