import React, { useCallback, useEffect, useRef } from 'react'
import useNearScreen from '../../hooks/useNearScreen'
import { Helmet } from 'react-helmet'
import useSticker from '../../hooks/useSticker'
import debounce from 'just-debounce-it'
import { motion } from 'framer-motion'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'wouter'
import ListOfStickers from '../../components/ListOfStickers'

export default function TrendingGifPage() {
  const { stickers, setPage } = useSticker()
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
        <title>Trending Stickers | Giffy</title>
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
        Trending Stickers
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
        <ListOfStickers stickers={stickers} />
      </motion.ul>
      <div id="visor" ref={externalRef}></div>
    </>
  )
}
