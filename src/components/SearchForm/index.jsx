import React, { useState, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGUAGES = ['en', 'es', 'ja', 'it', 'zh', 'ru']

function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState(RATINGS[0])
  const [lang, setLang] = useState(LANGUAGES[0])
  const [path, pushLocation] = useLocation()
  const [inputFocus, setInputFocus] = useState(false)
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    setInputFocus(false)
    setKeyword('')
    pushLocation(`/search/${keyword}/${rating}/${lang}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleFocus = () => {
    setInputFocus(true)
    inputRef.current.focus()
  }

  const handleChangeRating = e => {
    setRating(e.target.value)
  }

  const handleChangeLanguage = e => {
    setLang(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative rounded-md">
        <FiSearch
          onClick={handleFocus}
          className={`${
            inputFocus
              ? 'invisible -translate-x-8 sm:visible md:-translate-x-1'
              : 'translate-x-36 md:translate-x-64'
          } absolute top-1 left-1 z-10 h-auto w-6 cursor-pointer opacity-40 transition-transform duration-100`}
        />
        <div
          className={`${
            inputFocus
              ? 'opacity-100 transition-all duration-500'
              : 'opacity-0 transition-all duration-75'
          } effect-1 inline-flex items-center`}
        >
          <input
            placeholder="Search!"
            onChange={handleChange}
            onBlur={() => setInputFocus(false)}
            value={keyword}
            ref={inputRef}
            className="effect-1 w-24 border-b border-[#908caa]/70 bg-transparent py-1 text-sm outline-none md:w-40 md:px-7"
          />
          <select
            onFocus={handleFocus}
            onChange={handleChangeRating}
            value={rating}
            className="w-12 border-b border-[#908caa]/70 bg-transparent py-1 text-sm font-semibold outline-none md:w-16"
          >
            <option className="bg-orange-100 dark:bg-slate-800" disabled>
              Choose an option!
            </option>

            {RATINGS.map(rating => (
              <option className="bg-orange-100 dark:bg-slate-800" key={rating}>
                {rating}
              </option>
            ))}
          </select>
          <select
            onFocus={handleFocus}
            onChange={handleChangeLanguage}
            value={lang}
            className="w-12 border-b border-[#908caa]/70 bg-transparent py-1 text-sm font-semibold outline-none md:w-16"
          >
            <option className="bg-orange-100 dark:bg-slate-800" disabled>
              Choose a language!
            </option>

            {LANGUAGES.map(language => (
              <option
                className="bg-orange-100 dark:bg-slate-800"
                key={language}
              >
                {language}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default React.memo(SearchForm)
