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
  const { keyword, rating = 'g' } = params
  const { gifs, setPage } = useGifs({ keyword, rating })
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
      <div className="p-4">
        <Link to="/" className="group gap-1 p-4 font-semibold">
          <span className="inline-flex cursor-pointer items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick">
            <IoChevronBack />
            Go back
          </span>
        </Link>
        <h1 className="shadow-input my-4 w-max px-4 pt-4 text-xl font-bold">
          Searching for:{' '}
          <span className="text-lightcoral">{decodeURI(keyword)}</span>
        </h1>
      </div>
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
