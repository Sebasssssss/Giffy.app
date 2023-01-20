import React from 'react'
import Backdrop from '../Backdrop'
import { AnimatePresence, motion } from 'framer-motion'

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
      damping: '20',
      stiffness: '500'
    }
  }
}

export default function Modal({ handleClose, children }) {
  return (
    <>
      <Backdrop onClick={handleClose}>
        <AnimatePresence>
          <motion.div
            onClick={e => e.stopPropagation()}
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Backdrop>
    </>
  )
}
