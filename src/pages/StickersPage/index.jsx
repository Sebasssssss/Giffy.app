import React, { useCallback, useEffect, useRef } from 'react'
import ListOfStickers from '../../components/ListOfStickers'
import GoBackButton from '../../components/GoBackButton'
import useNearScreen from '../../hooks/useNearScreen'
import useSticker from '../../hooks/useSticker'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

export default function TrendingGifPage() {
  const { stickers, setPage } = useSticker()
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
        <title>Trending Stickers | Giffy</title>
      </Helmet>
      <GoBackButton />
      <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">Trending Stickers</span>
      </h1>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        <ListOfStickers stickers={stickers} />
      </div>
      <div ref={externalRef}></div>
    </>
  )
}
