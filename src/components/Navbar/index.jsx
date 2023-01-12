import React from 'react'
import { Link } from 'wouter'
import Pawda from '../icons/pawda'
import '../../../public/global.css'
import ToggleButton from '../ToggleThemeButton'
import SearchForm from '../SearchForm'

export default function Navbar() {
  return (
    <header className="fixed z-10 w-full p-2 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl justify-between">
        <Link
          to="/"
          className="group inline-flex items-center gap-1.5 p-2 text-center font-mplus text-lg font-semibold tracking-tighter outline-none"
        >
          <Pawda /> Home
        </Link>
        <div className="inline-flex items-center gap-3">
          <SearchForm />
          <ToggleButton />
        </div>
      </nav>
    </header>
  )
}
