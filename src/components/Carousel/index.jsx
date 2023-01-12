import React from 'react'
import useTrendingGif from '../../hooks/useTrendingGif'
import ListOfTrendingGifs from '../../components/ListOfTrendingGifs'
import { Link } from 'wouter'
import {
  IoChevronBack,
  IoChevronForward,
  IoArrowForward
} from 'react-icons/io5/'

export default function Carousel() {
  const { trendingGifs } = useTrendingGif()

  return (
    <>
      <div className="flex justify-between px-4">
        <h1 className="pb-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
          Trending Gifs
        </h1>
        <Link
          to="/gif/trending/"
          className="mt-2 inline-flex items-center gap-1 text-[#f6c177] transition-colors duration-500 hover:border-b hover:border-b-[#31648f] dark:text-[#31748f]"
        >
          See more! <IoArrowForward />
        </Link>
      </div>
      <div className="relative w-full overflow-hidden shadow-2xl shadow-zinc-900">
        <IoChevronForward className="absolute right-3 top-20 text-4xl" />
        <IoChevronBack className="absolute left-3 top-20 text-4xl" />
        <ul className="flex h-48 w-max gap-4 px-4">
          <ListOfTrendingGifs trendingGifs={trendingGifs} />
        </ul>
      </div>
    </>
  )
}
