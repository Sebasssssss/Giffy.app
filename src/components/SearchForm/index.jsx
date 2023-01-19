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
        <div className="inline-flex items-center text-lightcoral/70 dark:text-[#F8F9FA]">
          <div className="relative inline-flex w-80 items-center gap-1 rounded-2xl bg-[#EAE4E9] px-4 py-2 shadow-field dark:bg-[#85586f] dark:shadow-darkField md:w-96">
            <button className="mt-0.5">
              <FiSearch className="z-10 h-auto cursor-pointer opacity-60" />
            </button>
            <input
              placeholder="Search!"
              onChange={handleChange}
              value={keyword}
              ref={inputRef}
              className="bg-transparent px-1 outline-none placeholder:text-lightcoral/50 dark:placeholder:text-[#F8F9FA]/70"
            />
            <select
              onChange={handleChangeRating}
              value={rating}
              className="absolute right-0 w-14 bg-transparent text-sm font-semibold outline-none"
            >
              <option className="bg-[#eee] dark:bg-[#5C527F]" disabled>
                Choose an option!
              </option>

              {RATINGS.map(rating => (
                <option className="bg-[#eee] dark:bg-[#5C527F]" key={rating}>
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
