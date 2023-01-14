import React from 'react'
import useTrendingGif from '../../hooks/useTrendingGif'
import ListOfTrendingGifs from '../../components/ListOfTrendingGifs'
import { Link } from 'wouter'
import {
  IoChevronBack,
  IoChevronForward,
  IoArrowForward
} from 'react-icons/io5/'
import useSticker from '../../hooks/useSticker'
import ListOfStickers from '../../components/ListOfStickers'

export default function Carousel() {
  const { trendingGifs } = useTrendingGif()
  const { stickers } = useSticker()

  return (
    <>
      <div className="flex justify-between px-4 py-2">
        <h1 className="pb-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
          Trending Gifs
        </h1>
        <Link
          to="/gif/trending/"
          className="mt-2 inline-flex items-center gap-1 rounded-lg px-2 text-gold transition-colors duration-200 hover:bg-gold/20 hover:underline dark:text-pine dark:hover:bg-pine/10"
        >
          See more! <IoArrowForward />
        </Link>
      </div>
      <div className="group relative w-full overflow-hidden">
        <IoChevronBack className="absolute left-3 top-20 hidden text-4xl group-hover:block" />
        <ul className="flex h-48 w-max gap-4 px-4">
          <ListOfTrendingGifs trendingGifs={trendingGifs} />
        </ul>
        <IoChevronForward className="absolute right-3 top-20 hidden text-4xl group-hover:block" />
      </div>
      <div className="flex justify-between px-4 py-2">
        <h1 className="pb-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
          Trending Stickers
        </h1>
        <Link
          to="/stickers/trending/"
          className="mt-2 inline-flex items-center gap-1 rounded-lg px-2 text-gold transition-colors duration-200 hover:bg-gold/20 hover:underline dark:text-pine dark:hover:bg-pine/10"
        >
          See more! <IoArrowForward />
        </Link>
      </div>
      <div className="group relative w-full overflow-hidden">
        <IoChevronBack className="absolute left-3 top-20 hidden text-4xl group-hover:block" />
        <ul className="flex h-48 w-max gap-4 px-4">
          <ListOfStickers stickers={stickers} />
        </ul>
        <IoChevronForward className="absolute right-3 top-20 hidden text-4xl group-hover:block" />
      </div>
    </>
  )
}
