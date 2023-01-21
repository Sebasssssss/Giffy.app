import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [gifs, setGifs] = useState([])
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(
    function () {
      getGifs({ keyword: keywordToUse, rating }).then(gifs => {
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, keywordToUse, rating, setGifs]
  )

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return

      setLoadingNextPage(true)

      getGifs({ keyword: keywordToUse, page, rating }).then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    },
    [keywordToUse, page, rating, setGifs]
  )

  return { loadingNextPage, gifs, setPage }
}
