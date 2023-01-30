import React from 'react'
import TrendingGifs from '../../components/TrendingGifs'
import useSticker from '../../hooks/useSticker'
import useTrendingGif from '../../hooks/useTrendingGif'
import { Link } from 'wouter'

export default function carouselHook() {
  const { trendingGifs } = useTrendingGif()
  const { stickers } = useSticker()

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  }

  const trendingGifItems = trendingGifs.map(({ title, id, url }) => (
    <div key={id} className="mx-2">
      <TrendingGifs title={title} id={id} url={url} />
    </div>
  ))

  const trendingStickerItems = stickers.map(({ title, id, url }) => (
    <div
      key={id}
      className="relative mx-2 mb-4 h-80 overflow-hidden rounded-[1rem] border border-slate-700 text-center text-text shadow-md shadow-slate-700 md:h-44"
    >
      <Link to="/stickers/trending/">
        <img src={url} className="h-full w-full object-cover" />
        <h1 className="text-md absolute -bottom-1 left-0 w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-md">
          {title}
        </h1>
      </Link>
    </div>
  ))
  return { trendingStickerItems, trendingGifItems, responsive }
}
