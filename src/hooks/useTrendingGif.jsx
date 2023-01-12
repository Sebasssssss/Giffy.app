import { useState, useEffect } from 'react'
import getTrendingGifs from '../services/getTrendingGifs'

const INITIAL_PAGE = 0

export default function useTrendingGif({ rating } = {}) {
  const [trendingGifs, setTrendingGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  useEffect(
    function () {
      setLoading(true)
      getTrendingGifs({ rating }).then(gifs => {
        setTrendingGifs(gifs)
        setLoading(false)
      })
    },
    [setTrendingGifs, rating]
  )

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return

      setLoadingNextPage(true)

      getTrendingGifs({ page, rating }).then(nextGifs => {
        setTrendingGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    },
    [page, setTrendingGifs, rating]
  )

  return { trendingGifs, loadingNextPage, setPage, loading }
}
