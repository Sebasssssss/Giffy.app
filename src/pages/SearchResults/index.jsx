import React, { useEffect, useRef, useCallback } from 'react'
import { useGifs } from '../../hooks/useGif'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import CardsAbout from '../../components/ListOfGifs'
import { Helmet } from 'react-helmet'
import DoorDashFavorite from '../../components/Loading'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef, once: false })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    []
  )

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  })

  const title = gifs ? `${gifs.length} results of ${keyword}` : ''

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <h1 className="my-4 mt-20 px-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
        Searching for:{' '}
        <span className="text-[#f6c177]">{decodeURI(keyword)}</span>
      </h1>
      {loading ? <DoorDashFavorite /> : <CardsAbout gifs={gifs} />}
      <div id="visor" ref={externalRef}></div>
    </>
  )
}
