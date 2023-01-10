import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating, language } = { keyword: null }) {
  const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(
    function () {
      setLoading(true)
      getGifs({ keyword: keywordToUse, rating, language }).then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, keywordToUse, setGifs, rating, language]
  )

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return

      setLoadingNextPage(true)

      getGifs({ keyword: keywordToUse, page, rating, language }).then(
        nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        }
      )
    },
    [page, keywordToUse, setGifs, rating, language]
  )

  return { gifs, loadingNextPage, setPage, loading }
}
