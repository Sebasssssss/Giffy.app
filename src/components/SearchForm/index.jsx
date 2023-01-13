import React, { useReducer, useState, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGUAGES = ['en', 'es', 'ja', 'it', 'zh', 'ru']
const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  UPDATE_LANGUAGE: 'update_language'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }

    case ACTIONS.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }

    default:
      return state
  }
}

function SearchForm() {
  const [path, pushLocation] = useLocation()
  const inputRef = useRef(null)
  const [inputFocus, setInputFocus] = useState(false)
  const [state, dispatch] = useReducer(reducer, {
    keyword: '',
    rating: RATINGS[0],
    lang: LANGUAGES[0]
  })
  const { keyword, rating, lang } = state

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: '' })
    inputRef.current.blur()
    pushLocation(`/search/${keyword}/${rating}/${lang}`)
  }

  const handleChange = e => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value })
  }

  const handleFocus = () => {
    setInputFocus(true)
    inputRef.current.focus()
  }

  const handleChangeRating = e => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value })
  }

  const handleChangeLanguage = e => {
    dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: e.target.value })
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
            className="effect-1 w-24 border-b border-subtle/70 bg-transparent py-1 text-sm outline-none md:w-40 md:px-7"
          />
          <select
            onFocus={handleFocus}
            onChange={handleChangeRating}
            value={rating}
            className="w-12 border-b border-subtle/70 bg-transparent py-1 text-sm font-semibold outline-none md:w-16"
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
            className="w-12 border-b border-subtle/70 bg-transparent py-1 text-sm font-semibold outline-none md:w-16"
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
