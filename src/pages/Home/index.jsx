import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import LazyTrending from '../../components/TrendingSearches'
import Carousel from '../../components/Carousel'
import LastSearchTitle from '../../components/LastSearchTitle'
import { Helmet } from 'react-helmet'
import { useGifs } from '../../hooks/useGif'

export default function Home() {
  const { gifs } = useGifs()
  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <Carousel />
      <LastSearchTitle />
      <ListOfGifs gifs={gifs} />
      <LazyTrending />
    </>
  )
}
