import React, { useCallback, useEffect, useRef } from 'react'
import ListOfTrendingGifs from '../../components/ListOfTrendingGifs'
import GoBackButton from '../../components/GoBackButton'
import useNearScreen from '../../hooks/useNearScreen'
import useTrendingGif from '../../hooks/useTrendingGif'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import AnimateIn from '../../components/AnimateIn'

export default function TrendingGifPage() {
  const { trendingGifs, setPage } = useTrendingGif()
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef, once: false })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    [setPage]
  )

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage()
    },
    [isNearScreen, debounceHandleNextPage]
  )

  return (
    <>
      <Helmet>
        <title>Trending Gifs | Giffy</title>
      </Helmet>
      <GoBackButton />
      <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">Trending Gifs</span>
      </h1>
      <AnimateIn className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        <ListOfTrendingGifs trendingGifs={trendingGifs} />
      </AnimateIn>
      <div ref={externalRef}></div>
    </>
  )
}
