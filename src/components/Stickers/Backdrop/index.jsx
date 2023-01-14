import React from 'react'
import { motion } from 'framer-motion'

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 z-20 grid h-full w-full items-center justify-center bg-black/60"
    >
      {children}
    </motion.div>
  )
}
