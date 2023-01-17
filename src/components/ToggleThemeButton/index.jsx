import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IoSunny, IoMoon } from 'react-icons/io5'
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
      className="switch relative flex h-6 w-10 cursor-pointer justify-start rounded-[50px] bg-[#eee] p-0.5 shadow-switch dark:bg-[#5c527f]/70 dark:shadow-darkField"
      data-isMounted={isMounted}
      onClick={toggleTheme}
    >
      <div className="absolute top-1.5 inline-flex items-center gap-1.5 text-sm opacity-80">
        <IoSunny />
        <IoMoon />
      </div>
      <motion.div
        className="z-10 h-5 w-5 rounded-[40px] bg-[lightsalmon] content-none dark:bg-[#6e85b2]"
        layout
        transition={spring}
      />
    </div>
  )
}

export default React.memo(ToggleButton)
