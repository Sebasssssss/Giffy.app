import React, { useState, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')
  let [inputFocus, setInputFocus] = useState(false)
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    document.activeElement.blur()
    setKeyword('')
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
    <div>
      <form onSubmit={handleSubmit} className="relative rounded-md">
        <FiSearch
          onClick={handleFocus}
          className={`${
            inputFocus
              ? '-translate-x-8 md:-translate-x-1'
              : 'translate-x-32 md:translate-x-44'
          } absolute top-0.5 left-1 z-10 h-auto w-6 cursor-pointer opacity-40 transition-transform duration-100`}
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
              : 'opacity-0 transition-all duration-75'
          } effect-1 border-b border-[#908caa]/70 bg-transparent py-1 text-sm outline-none md:px-7`}
        />
      </form>
    </div>
  )
}

export default React.memo(SearchForm)
