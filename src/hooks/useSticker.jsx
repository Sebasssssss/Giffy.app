import { useState, useEffect } from 'react'
import getStickers from '../services/getStickers'

const INITIAL_PAGE = 0

export default function useStickers({ rating } = {}) {
  const [stickers, setStickers] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  useEffect(
    function () {
      setLoading(true)
      getStickers({ rating }).then(gifs => {
        setStickers(gifs)
        setLoading(false)
      })
    },
    [setStickers, rating]
  )

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return

      setLoadingNextPage(true)

      getStickers({ page, rating }).then(nextGifs => {
        setStickers(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    },
    [page, setStickers, rating]
  )

  return { stickers, loadingNextPage, setPage, loading }
}
