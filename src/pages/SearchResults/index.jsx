import React, { useEffect, useRef, useCallback } from 'react'
import { useGifs } from '../../hooks/useGif'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import CardsAbout from '../../components/ListOfGifs'
import { Helmet } from 'react-helmet'

export default function SearchResults({ params }) {
  const { keyword, rating = 'g', language = 'en' } = params
  const { gifs, setPage } = useGifs({ keyword, rating, language })
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

  const title = gifs ? `${gifs.length} results of ${decodeURI(keyword)}` : ''

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <h1 className="my-4 mt-20 px-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
        Searching for:{' '}
        <span className="text-[#f6c177]">{decodeURI(keyword)}</span>
      </h1>
      <CardsAbout gifs={gifs} />
      <div id="visor" ref={externalRef}></div>
    </>
  )
}
