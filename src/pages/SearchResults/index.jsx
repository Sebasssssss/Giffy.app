import React, { useEffect, useRef, useCallback } from 'react'
import { useGifs } from '../../hooks/useGif'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import Loader from '../../components/Loader'
import CardsAbout from '../../components/cardsAbout'

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

  return (
    <>
      <select className="w-32 rounded-lg px-4 outline-none mb-4 mt-16 bg-zinc-700/50 border border-slate-700 font-semibold">
        <option disabled>Choose an option!</option>
        <option className="bg-zinc-900">A-Z</option>
        <option className="bg-zinc-900">Z-A</option>
      </select>
      {loading ? <Loader /> : <CardsAbout gifs={gifs} />}
      <div id="visor" ref={externalRef}></div>
    </>
  )
}
