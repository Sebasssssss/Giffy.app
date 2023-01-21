import React, { useCallback, useEffect, useRef } from 'react'
import ListOfTrendingGifs from '../../components/ListOfTrendingGifs'
import GoBackButton from '../../components/GoBackButton'
import useNearScreen from '../../hooks/useNearScreen'
import useTrendingGif from '../../hooks/useTrendingGif'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

export default function TrendingGifPage() {
  const { trendingGifs, setPage } = useTrendingGif()
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef, once: false })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    [setPage]
  )

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage()
    },
    [isNearScreen, debounceHandleNextPage]
  )

  return (
    <>
      <Helmet>
        <title>Trending Gifs | Giffy</title>
      </Helmet>
      <GoBackButton />
      <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">Trending Gifs</span>
      </h1>
      <motion.ul
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <ListOfTrendingGifs trendingGifs={trendingGifs} />
      </motion.ul>
      <div id="visor" ref={externalRef}></div>
    </>
  )
}
