import { useGifs } from '../hooks/useGif'
import React from 'react'
import CardsAbout from '../components/cardsAbout'
import LazyTrending from '../components/TrendingSearches'
import Loader from '../components/Loader'

export default function Home() {
  const { gifs, loading } = useGifs()
  return (
    <>
      <p className="max-w-3xl mx-auto p-5 mt-16">
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
