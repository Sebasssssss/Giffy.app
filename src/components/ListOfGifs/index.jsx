import React from 'react'
import Gifs from '../Gifs'
import { AnimatePresence, motion } from 'framer-motion'

export default function CardsAbout({ gifs }) {
  return (
    <>
      <motion.ul
        className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2"
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <AnimatePresence mode="wait">
          {gifs.map(({ title, id, url }) => (
            <Gifs key={id} id={id} url={url} title={title} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  )
}
