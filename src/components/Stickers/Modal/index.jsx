import React from 'react'
import Backdrop from '../Backdrop'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    y: '50',
    scale: '0',
    opacity: '0'
  },
  visible: {
    y: '0',
    scale: '1',
    opacity: '1',
    transition: {
      duration: '0.1',
      type: 'spring',
      damping: '25',
      stiffness: '500'
    }
  },
  exit: {
    y: '-100vh',
    scale: '0',
    opacity: '0'
  }
}

export default function Modal({ handleClose, children }) {
  return (
    <>
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={e => e.stopPropagation()}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      </Backdrop>
    </>
  )
}
