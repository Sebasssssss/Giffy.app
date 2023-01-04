import React, { useCallback } from 'react'
import { Link, useLocation } from 'wouter'
import Pawda from './icons/pawda'
import '../../public/global.css'
import ToggleButton from './ToggleButton'
import SearchForm from './SearchForm'

export default function Navbar() {
  const [path, pushLocation] = useLocation()

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`)
    },
    [pushLocation]
  )

  return (
    <header className="backdrop-blur-md p-2 fixed w-full z-10">
      <nav className="max-w-3xl mx-auto flex justify-between">
        <Link
          to="/"
          className="group text-lg p-2 font-semibold font-mplus inline-flex items-center gap-1.5 text-center tracking-tighter outline-none"
        >
          <Pawda /> Sebass <span>Rodriguez</span>
        </Link>
        <div className="inline-flex items-center gap-3">
          <SearchForm onSubmit={handleSubmit} />
          <ToggleButton />
        </div>
      </nav>
    </header>
  )
}
