import React from 'react'
import { Link } from 'wouter'
import { motion } from 'framer-motion'

function Gifs({ title, id, url }) {
  return (
    <motion.div exit={{ opacity: 0, scale: 0.5 }}>
      <li className="mb-4 text-center">
        <Link key={id} to={`/gif/${id}`}>
          <img
            src={url}
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-xl border border-[#ebbcba] object-cover dark:border-[#26233a] md:h-44"
          />
          <h1 className="text-xl font-bold">{title}</h1>
        </Link>
      </li>
    </motion.div>
  )
}

export default React.memo(Gifs)
