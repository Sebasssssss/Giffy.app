import React from 'react'
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube
} from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="mt-4 grid w-full items-center justify-center overflow-hidden">
      <h1 className="font-semibold opacity-50">
        You can contact me on my social media!
      </h1>
      <div className="inline-flex items-center justify-center gap-2 p-4 text-2xl">
        <motion.a
          animate={{ opacity: 0.5 }}
          whileHover={{
            scale: [null, 1.2, 1.1],
            y: [null, -1.9, -1.5],
            opacity: 1
          }}
          transition={{ duration: 0.3 }}
          href="#"
        >
          <AiFillInstagram />
        </motion.a>
        <motion.a
          animate={{ opacity: 0.5 }}
          whileHover={{
            scale: [null, 1.2, 1.1],
            y: [null, -1.9, -1.5],
            opacity: 1
          }}
          transition={{ duration: 0.3 }}
          href="#"
        >
          <AiOutlineTwitter />
        </motion.a>
        <motion.a
          animate={{ opacity: 0.5 }}
          whileHover={{
            scale: [null, 1.2, 1.1],
            y: [null, -1.9, -1.5],
            opacity: 1
          }}
          transition={{ duration: 0.3 }}
          href="#"
        >
          <BsTwitch />
        </motion.a>
        <motion.a
          animate={{ opacity: 0.5 }}
          whileHover={{
            scale: [null, 1.2, 1.1],
            y: [null, -1.9, -1.5],
            opacity: 1
          }}
          transition={{ duration: 0.3 }}
          href="#"
        >
          <AiFillYoutube />
        </motion.a>
      </div>
    </footer>
  )
}
