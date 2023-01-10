import React, { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { IoSunny, IoMoon } from 'react-icons/io5'

const themes = ['light', 'dark']

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
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Switch
      checked={isMounted}
      onClick={toggleTheme}
      onChange={setIsMounted}
      className={`${isMounted ? 'bg-[#31748f]' : 'bg-[#f6c177]'}
          relative hidden h-7 w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 sm:inline-flex`}
    >
      <span
        aria-hidden="true"
        className={`${isMounted ? 'translate-x-[22px]' : 'translate-x-0'}
            pointer-events-none relative z-10 inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
      <div className="absolute top-1 left-0 inline-flex items-center gap-3.5">
        <IoSunny />
        <IoMoon />
      </div>
    </Switch>
  )
}

export default React.memo(ToggleButton)
