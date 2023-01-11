import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './styles.css'

function ToggleButton() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
      setIsMounted(false)
    } else {
      root.classList.add('dark')
      setIsMounted(true)
    }
  }, [theme])

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 23
  }

  return (
    <div
      className="switch flex h-6 w-10 cursor-pointer justify-start rounded-[50px] bg-orange-200/50 p-0.5 dark:bg-[#31748f]/50"
      data-isMounted={isMounted}
      onClick={toggleTheme}
    >
      <motion.div
        className="h-5 w-5 rounded-[40px] bg-[#f6c177] dark:bg-[#31748f]"
        layout
        transition={spring}
      />
    </div>
  )
}

export default React.memo(ToggleButton)
