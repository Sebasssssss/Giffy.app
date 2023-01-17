import React from 'react'
import useTrendingGif from '../../hooks/useTrendingGif'
import ListOfTrendingGifs from '../../components/ListOfTrendingGifs'
import { Link } from 'wouter'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5/'
import useSticker from '../../hooks/useSticker'
import ListOfStickers from '../../components/ListOfStickers'

export default function Carousel() {
  const { trendingGifs } = useTrendingGif()
  const { stickers } = useSticker()

  return (
    <>
      <div className="relative py-4 text-center">
        <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
          <span className="relative inline-block">Trending Gifs</span>
        </h1>
        <Link
          to="/gif/trending/"
          className="absolute right-0 -top-6 inline-flex items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick sm:-top-1"
        >
          See more...
        </Link>
      </div>
      <div className="group relative w-full overflow-hidden">
        <IoChevronBack className="absolute left-3 top-20 hidden text-4xl group-hover:block" />
        <ul className="flex h-48 w-max gap-4">
          <ListOfTrendingGifs trendingGifs={trendingGifs} />
        </ul>
        <IoChevronForward className="absolute right-3 top-20 hidden text-4xl group-hover:block" />
      </div>
      <div className="relative py-4 pt-10 text-center sm:pt-4">
        <h1 className="fancy mt-8 pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
          <span className="relative inline-block">Trending Stickers</span>
        </h1>
        <Link
          to="/stickers/trending/"
          className="absolute right-0 top-7 inline-flex items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick"
        >
          See more...
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
