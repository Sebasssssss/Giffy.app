import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import LazyTrending from '../../components/TrendingSearches'
import Carousel from '../../components/Carousel'
import { Helmet } from 'react-helmet'
import { IoArrowDown } from 'react-icons/io5/'
import { motion } from 'framer-motion'
import { useGifs } from '../../hooks/useGif'
import HomeIntroduction from '../../components/HomeIntroduction'

export default function Home() {
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <HomeIntroduction />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className="relative">
          <Carousel />
          <div className="mt-8 py-4">
            <h1 className="fancy text-center font-mplus text-lg font-semibold leading-[0.5]">
              <span className="relative inline-flex items-center gap-2">
                <IoArrowDown /> Last search <IoArrowDown />
              </span>
            </h1>
          </div>
          <ListOfGifs gifs={gifs} />
        </div>
      </motion.div>
      <LazyTrending />
    </>
  )
}
