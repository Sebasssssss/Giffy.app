import React, { useEffect, useRef, useCallback } from 'react'
import { useGifs } from '../../hooks/useGif'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import ListOfGifs from '../../components/ListOfGifs'
import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { IoChevronBack } from 'react-icons/io5/'

export default function SearchResults({ params }) {
  const { keyword, rating = 'g', language = 'en' } = params
  const { gifs, setPage } = useGifs({ keyword, rating, language })
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

  const title = gifs ? `${gifs.length} results of ${decodeURI(keyword)}` : ''

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <Link
        to="/"
        className="group inline-flex items-center gap-1 p-4 font-semibold"
      >
        <IoChevronBack className="text-lg text-[#f6c177] transition-colors duration-500 group-hover:text-[#191724] dark:text-[#31748f] dark:group-hover:text-[#e0def4]" />
        <span className="transition-colors duration-500 group-hover:text-[#f6c177] dark:group-hover:text-[#31748f]">
          Go back
        </span>
      </Link>
      <h1 className="my-4 px-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
        Searching for:{' '}
        <span className="text-[#f6c177]">{decodeURI(keyword)}</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <ListOfGifs gifs={gifs} />
      </motion.div>
      <div id="visor" ref={externalRef}></div>
    </>
  )
}
