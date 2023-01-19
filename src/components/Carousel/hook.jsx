import React from 'react'
import TrendingGifs from '../../components/TrendingGifs'
import Stickers from '../../components/Stickers'
import useSticker from '../../hooks/useSticker'
import useTrendingGif from '../../hooks/useTrendingGif'

export default function carouselHook() {
  const { trendingGifs } = useTrendingGif()
  const { stickers } = useSticker()

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  }

  const trendingGifItems = trendingGifs.map(({ title, id, url }) => (
    <TrendingGifs key={id} title={title} id={id} url={url} />
  ))

  const trendingStickerItems = stickers.map(({ title, id, url }) => (
    <Stickers key={id} title={title} id={id} url={url} />
  ))
  return { trendingStickerItems, trendingGifItems, responsive }
}
