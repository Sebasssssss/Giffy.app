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

  const trendingStickerItems = stickers.map(({ id, url }) => (
    <div
      key={id}
      className="mx-2 mb-4 flex cursor-pointer items-center overflow-hidden rounded-md border border-blue-900/20 text-center shadow-card transition-all duration-200 hover:shadow-cardHover dark:border-[#3E2C41] dark:shadow-cardDark dark:hover:shadow-cardDarkHover"
    >
      <Link to="/stickers/trending/">
        <img
          src={url}
          loading="lazy"
          decoding="async"
          className="h-80 w-full object-cover md:h-44"
        />
      </Link>
    </div>
  ))
  return { trendingStickerItems, trendingGifItems, responsive }
}
