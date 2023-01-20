import React from 'react'
import { Link } from 'wouter'
import ToggleButton from '../ToggleThemeButton'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'

export default function Navbar() {
  return (
    <header className="fixed z-10 w-full p-2 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl justify-between p-1">
        <div className="inline-flex items-center gap-3">
          <Link to="/" className="text-center tracking-tighter outline-none">
            <motion.span
              whileHover={{ scale: [null, 1.2, 1.1] }}
              whileTap={{ scale: 1.1 }}
              className="cursor-pointer px-2 font-mplus text-lg font-bold"
            >
              Giffy
            </motion.span>
          </Link>
          <a
            href="https://github.com/Sebasssssss/Giffy.app"
            className="inline-flex items-center gap-1"
          >
            <AiFillGithub />
            Source
          </a>
        </div>

        <div className="inline-flex items-center">
          <ToggleButton />
        </div>
      </nav>
    </header>
  )
}
