import React, { useState, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState(RATINGS[0])
  const [path, pushLocation] = useLocation()
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    inputRef.current.blur()
    setKeyword('')
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleChangeRating = e => {
    setRating(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <div className="group inline-flex items-center text-[#F8F9FA]">
          <div className="gap-1md:w-96 inline-flex w-80 items-center">
            <FiSearch className="absolute left-2 top-3 z-10 h-auto cursor-pointer opacity-60" />
            <input
              placeholder="Search!"
              onChange={handleChange}
              value={keyword}
              ref={inputRef}
              className="group relative rounded-xl border border-slate-700 bg-transparent py-2 pl-[2.5rem] outline-none focus:shadow-searchForm focus:transition-shadow focus:duration-100"
            />
            <select
              onChange={handleChangeRating}
              value={rating}
              className="invisible absolute right-4 w-14 bg-transparent text-sm font-semibold outline-none group-hover:visible"
            >
              <option className="text-base" disabled>
                Choose an option!
              </option>

              {RATINGS.map(rating => (
                <option className="text-base" key={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </>
  )
}

export default React.memo(SearchForm)
