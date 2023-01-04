import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    document.activeElement.blur()
    onSubmit({ keyword })
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <button>
        <FiSearch className="absolute top-1.5 z-10 left-1 opacity-40" />
      </button>
      <input
        placeholder="Search for a gif!"
        onChange={handleChange}
        value={keyword}
        className="rounded outline-none md:px-6 py-1 text-sm bg-[#908caa] dark:bg-[#26233a] transition-colors duration-500"
      />
    </form>
  )
}

export default React.memo(SearchForm)
