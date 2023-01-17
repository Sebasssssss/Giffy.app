import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import LazyTrending from '../../components/TrendingSearches'
import Carousel from '../../components/Carousel'
import { Helmet } from 'react-helmet'
import { IoArrowForward } from 'react-icons/io5/'
import { motion } from 'framer-motion'
import { useGifs } from '../../hooks/useGif'
import Loader from '../../components/Loader'

export default function Home() {
  const { gifs, loading } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <p className="mx-auto rounded pt-4 pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id
        nihil, at dolorum eaque maiores quia amet sit eius libero nulla ipsam
        perferendis consectetur obcaecati fugiat, odio quas non facere dicta
        nisi nobis accusantium! doloribus libero inventore delectus animi quasi
        perferendis consectetur obcaecati fugiat, odio quas non facere dicta
        nisi nobis accusantium! doloribus libero inventore delectus animi quasi
        voluptatibus possimus excepturi,{' '}
        <span className="inline-flex items-center gap-1 text-lightcoral transition-colors duration-500 dark:text-[#6e85b2]">
          {' '}
          voluptates et distinctio. Repellat?
          <IoArrowForward />
        </span>
      </p>
      {loading ? (
        <Loader />
      ) : (
        <>
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
                  <span className="relative inline-block">Common gifs</span>
                </h1>
              </div>
              <ListOfGifs gifs={gifs} />
            </div>
          </motion.div>
        </>
      )}
      <LazyTrending />
    </>
  )
}
