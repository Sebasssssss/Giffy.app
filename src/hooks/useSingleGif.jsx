import { useEffect, useState } from 'react'
import getSingleGifs from '../services/getSingleGifs'
import { useGifs } from './useGif'

export default function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gifFromCache)
  const [loading, setIsLoading] = useState(false)
  const [error, setIsError] = useState(false)

  useEffect(
    function () {
      if (!gif) {
        setIsLoading(true)
        getSingleGifs({ id })
          .then(gif => {
            setGif(gif)
            setIsLoading(false)
            setIsError(false)
          })
          .catch(err => {
            setIsLoading(false)
            setIsError(true)
          })
      }
    },
    [gif, id]
  )

  return { gif, loading, error }
}
