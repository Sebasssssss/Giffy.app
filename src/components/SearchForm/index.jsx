import React, { useState, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')
  let [inputFocus, setInputFocus] = useState(false)
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    document.activeElement.blur()
    onSubmit({ keyword })
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleFocus = () => {
    setInputFocus(true)
    inputRef.current.focus()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative rounded-md overflow-hidden"
      >
        <FiSearch
          onClick={handleFocus}
          className={`${
            inputFocus ? '-translate-x-1' : 'translate-x-44'
          } absolute cursor-pointer top-0.5 z-10 w-6 h-auto left-1 opacity-40 transition-transform duration-300`}
        />
        <input
          placeholder="Search for a gif!"
          onChange={handleChange}
          onBlur={() => setInputFocus(false)}
          value={keyword}
          ref={inputRef}
          className={`${
            inputFocus
              ? 'opacity-100 transition-all duration-500'
              : 'opacity-0 transition-all duration-100'
          } outline-none effect-1 md:px-7 py-1 text-sm bg-transparent border-b border-zinc-400 dark:border-zinc-700 dark:hover:bg-[#26233a]`}
        />
      </form>
    </>
  )
}

export default React.memo(SearchForm)
