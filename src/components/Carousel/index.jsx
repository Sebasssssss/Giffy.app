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
      <div className="flex justify-between py-4">
        <h1 className="rounded border border-gold border-opacity-10 bg-gold/40 px-4 py-2 text-xl font-bold shadow dark:border-pine dark:border-opacity-30 dark:bg-pine/50">
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
        <ul className="flex h-48 w-max gap-4">
          <ListOfTrendingGifs trendingGifs={trendingGifs} />
        </ul>
        <IoChevronForward className="absolute right-3 top-20 hidden text-4xl group-hover:block" />
      </div>
      <div className="flex justify-between py-4 pt-8">
        <h1 className="rounded border border-gold border-opacity-10 bg-gold/40 px-4 py-2 text-xl font-bold shadow dark:border-pine dark:border-opacity-30 dark:bg-pine/50">
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
        <ul className="flex h-48 w-max gap-4">
          <ListOfStickers stickers={stickers} />
        </ul>
        <IoChevronForward className="absolute right-3 top-20 hidden text-4xl group-hover:block" />
      </div>
    </>
  )
}
