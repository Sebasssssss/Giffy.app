import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import LazyTrending from '../../components/TrendingSearches'
import HomeIntroduction from '../../components/HomeIntroduction'
import Carousel from '../../components/Carousel'
import { Helmet } from 'react-helmet'
import LastSearchTitle from '../../components/LastSearchTitle'
import AnimateIn from '../../components/AnimateIn'
import { useGifs } from '../../hooks/useGif'

export default function Home() {
  const { gifs } = useGifs()
  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <HomeIntroduction />
      <AnimateIn>
        <Carousel />
        <LastSearchTitle />
        <ListOfGifs gifs={gifs} />
      </AnimateIn>
      <LazyTrending />
    </>
  )
}
