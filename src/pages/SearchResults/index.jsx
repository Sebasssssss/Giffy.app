import React, { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import { useGifs } from '../../hooks/useGif'
import GoBackButton from '../../components/GoBackButton'

export default function SearchResults({ params }) {
  const { keyword, rating } = params
  const { gifs, setPage } = useGifs({ keyword, rating })
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
      <GoBackButton />
      <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">
          Searching for: {''}
          <span className="text-lightcoral">{decodeURI(keyword)}</span>
        </span>
      </h1>
      <ListOfGifs gifs={gifs} />
      <div ref={externalRef}></div>
    </>
  )
}
