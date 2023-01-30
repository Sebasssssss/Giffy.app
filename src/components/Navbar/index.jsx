import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

export default function Navbar() {
  return (
    <header className="absolute z-10 w-full p-2">
      <nav className="mx-auto flex max-w-7xl justify-end p-1">
        <a
          href="https://github.com/Sebasssssss/Giffy.app"
          className="inline-flex items-center gap-1"
        >
          <AiFillGithub />
          Source
        </a>
      </nav>
    </header>
  )
}
