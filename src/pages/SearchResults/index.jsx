import React, { useEffect, useRef, useCallback } from 'react'
import AnimateIn from '../../components/AnimateIn'
import ListOfGifs from '../../components/ListOfGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import { Link } from 'wouter'
import { IoChevronBack } from 'react-icons/io5/'
import { useGifs } from '../../hooks/useGif'

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
      <Link to="/" className="group font-semibold">
        <span className="inline-flex cursor-pointer items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick">
          <IoChevronBack />
          Go back
        </span>
      </Link>
      <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">
          Searching for: {''}
          <span className="text-lightcoral">{decodeURI(keyword)}</span>
        </span>
      </h1>
      <AnimateIn>
        <ListOfGifs gifs={gifs} />
      </AnimateIn>
      <div ref={externalRef}></div>
    </>
  )
}
