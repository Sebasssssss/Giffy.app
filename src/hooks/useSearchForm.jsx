import { useRef, useReducer } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGUAGES = ['en', 'es', 'ja', 'it', 'zh', 'ru']

const reducer = (state, param) => {
  return {
    ...state,
    keyword: param,
    rating: param,
    lang: param,
    inputFocus: param
  }
}

export default function useSearchForm() {
  const [path, pushLocation] = useLocation()
  const inputRef = useRef(null)

  const [state, dispatch] = useReducer(reducer, {
    keyword: '',
    rating: RATINGS[0],
    lang: LANGUAGES[0],
    inputFocus: false
  })

  const { keyword, rating, lang, inputFocus } = state

  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}/${lang}`)
  }

  const handleChange = e => {
    keyword(e.target.value)
  }

  const handleFocus = () => {
    inputFocus(true)
    inputRef.current.focus()
  }

  const handleChangeRating = e => {
    rating(e.target.value)
  }

  const handleChangeLanguage = e => {
    lang(e.target.value)
  }
}
