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
      <div className="relative py-4 text-center">
        <h1 className="fancy font-mplus text-lg font-semibold">
          <span>Trending Gifs</span>
        </h1>
        <Link
          to="/gif/trending/"
          className="absolute right-0 top-0 mt-2 inline-flex items-center gap-1 rounded-lg px-2 text-gold transition-colors duration-200 hover:bg-gold/20 hover:underline dark:text-pine dark:hover:bg-pine/10"
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
      <div className="relative py-4 text-center">
        <h1 className="fancy mt-8 font-mplus text-lg font-semibold">
          <span>Trending Stickers</span>
        </h1>
        <Link
          to="/stickers/trending/"
          className="absolute right-0 top-8 mt-2 inline-flex items-center gap-1 rounded-lg px-2 text-gold transition-colors duration-200 hover:bg-gold/20 hover:underline dark:text-pine dark:hover:bg-pine/10"
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
