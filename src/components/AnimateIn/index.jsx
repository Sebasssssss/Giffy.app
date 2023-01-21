import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 100,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
}

export default function AnimateIn({ children, ...restProps }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
      {...restProps}
    >
      {children}
    </motion.div>
  )
}
