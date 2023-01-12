import { useGifs } from '../../hooks/useGif'
import React from 'react'
import CardsAbout from '../../components/ListOfGifs'
import LazyTrending from '../../components/TrendingSearches'
import { Helmet } from 'react-helmet'
import { IoArrowForward } from 'react-icons/io5/'

export default function Home() {
  const { gifs } = useGifs()

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
      <CardsAbout gifs={gifs} />
      <LazyTrending />
    </>
  )
}
