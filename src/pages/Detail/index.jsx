import useSingleGif from '../../hooks/useSingleGif'
import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

export default function Detail({ params }) {
  const { gif } = useSingleGif({ id: params.id })
  if (!gif) return null
  const title = gif ? gif.title : ''

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.978 }}
        animate={{ opacity: 100, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="mt-24 grid grid-cols-1 gap-4 p-4"
      >
        <img
          src={gif.url}
          className="mb-8 w-full rounded-xl border border-blue-900/20"
        />
        <div className="flex flex-col border-b border-base">
          <h1 className="text-left font-mplus text-3xl">{gif.title}</h1>
          <h1 className="py-2 pb-4 text-left">{gif.title}</h1>
        </div>
      </motion.div>
    </>
  )
}
