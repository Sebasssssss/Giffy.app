import React, { useEffect, useRef, useCallback } from 'react'
import { useGifs } from '../../hooks/useGif'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import Loader from '../../components/Loader'
import CardsAbout from '../../components/cardsAbout'
import { Helmet } from 'react-helmet'

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
      <select className="mb-4 mt-16 w-32 rounded-lg border border-slate-700 bg-zinc-700/50 px-4 font-semibold outline-none">
        <option disabled>Choose an option!</option>
        <option className="bg-zinc-900">A-Z</option>
        <option className="bg-zinc-900">Z-A</option>
      </select>
      <h1 className="my-4 p-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
        Searching for: {keyword}
      </h1>
      {loading ? <Loader /> : <CardsAbout gifs={gifs} />}
      <div id="visor" ref={externalRef}></div>
    </>
  )
}
