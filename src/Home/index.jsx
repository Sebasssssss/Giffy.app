import { useGifs } from '../hooks/useGif'
import React from 'react'
import CardsAbout from '../components/cardsAbout'
import LazyTrending from '../components/TrendingSearches'
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet'

export default function Home() {
  const { gifs, loading } = useGifs()
  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <p className="mx-auto mt-16 max-w-3xl p-5">
        Im Sebastian and ive been into the tecnology world since im 13 years
        old. I started coding due to friends who would usually code and because
        i used to watch many videos of people coding, as Takuya Matsuyama.
        Nowadays Im coding php and using Tailwindcss as a tool for making my
        websites.
      </p>
      {loading ? <Loader /> : <CardsAbout gifs={gifs} />}
      <LazyTrending />
    </>
  )
}
