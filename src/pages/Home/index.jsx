import { useGifs } from '../../hooks/useGif'
import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import LazyTrending from '../../components/TrendingSearches'
import { Helmet } from 'react-helmet'
import {
  IoArrowForward,
  IoChevronBack,
  IoChevronForward
} from 'react-icons/io5/'
import ListOfTrendingGifs from '../../components/ListOfTrendingGifs'
import useTrendingGif from '../../hooks/useTrendingGif'
import { motion } from 'framer-motion'
import { Link } from 'wouter'

export default function Home() {
  const { gifs } = useGifs()
  const { trendingGifs } = useTrendingGif()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <p className="mx-auto mt-16 max-w-3xl p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id
        nihil, at dolorum eaque maiores quia amet sit eius libero nulla ipsam
        perferendis consectetur obcaecati fugiat, odio quas non facere dicta
        nisi nobis accusantium! doloribus libero inventore delectus animi quasi
        perferendis consectetur obcaecati fugiat, odio quas non facere dicta
        nisi nobis accusantium! doloribus libero inventore delectus animi quasi
        voluptatibus possimus excepturi,{' '}
        <span className="inline-flex items-center gap-1 text-[#f6c177] transition-colors duration-500 dark:text-[#31748f]">
          {' '}
          voluptates et distinctio. Repellat?
          <IoArrowForward />
        </span>
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className="flex justify-between px-4">
          <h1 className="pb-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
            Trending Gifs
          </h1>
          <Link
            to="/gif/trending/"
            className="mt-2 inline-flex items-center gap-1 text-[#f6c177] transition-colors duration-500 hover:border-b hover:border-b-[#31648f] dark:text-[#31748f]"
          >
            More gifs! <IoArrowForward />
          </Link>
        </div>
        <div className="relative w-full overflow-hidden shadow-2xl shadow-zinc-900">
          <IoChevronForward className="absolute right-3 top-20 text-4xl" />
          <IoChevronBack className="absolute left-3 top-20 text-4xl" />
          <ul className="flex h-48 w-max gap-4 px-4">
            <ListOfTrendingGifs trendingGifs={trendingGifs} />
          </ul>
          <ListOfGifs gifs={gifs} />
        </div>
      </motion.div>
      <LazyTrending />
    </>
  )
}
