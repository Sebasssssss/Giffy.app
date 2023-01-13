import React from 'react'
import { Link } from 'wouter'
import '../../../public/global.css'
import ToggleButton from '../ToggleThemeButton'
import SearchForm from '../SearchForm'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed z-10 w-full p-2 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl justify-between">
        <Link
          to="/"
          className="group inline-flex items-center gap-1.5 p-2 text-center tracking-tighter outline-none"
        >
          <motion.span
            whileHover={{ scale: [null, 1.2, 1.1] }}
            whileTap={{ scale: 1.1 }}
            className="cursor-pointer font-mplus text-lg"
          >
            Home
          </motion.span>
        </Link>
        <div className="inline-flex items-center gap-3">
          <SearchForm />
          <ToggleButton />
        </div>
      </nav>
    </header>
  )
}
