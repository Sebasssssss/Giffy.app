import React, { useCallback, useEffect, useRef } from 'react'
import useNearScreen from '../../hooks/useNearScreen'
import { Helmet } from 'react-helmet'
import useTrendingGif from '../../hooks/useTrendingGif'
import debounce from 'just-debounce-it'
import ListOfTrendingGifs from '../../components/ListOfTrendingGifs'
import { motion } from 'framer-motion'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'wouter'

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
      <Link to="/" className="group gap-1 p-4 font-semibold">
        <span className="inline-flex cursor-pointer items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick">
          <IoChevronBack />
          Go back
        </span>
      </Link>
      <h1 className="my-4 px-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
        Trending Gifs
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
