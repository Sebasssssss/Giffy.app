import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'wouter'
import 'react-alice-carousel/lib/alice-carousel.css'
import carouselHook from './hook'

function Carousel() {
  const { trendingStickerItems, trendingGifItems, responsive } = carouselHook()

  return (
    <>
      <div className="relative py-4 text-center">
        <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
          <span className="relative inline-block">Trending Gifs</span>
        </h1>
        <Link
          to="/gif/trending/"
          className="absolute right-0 -top-6 inline-flex items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick sm:top-0"
        >
          See more...
        </Link>
      </div>
      <AliceCarousel
        mouseTracking
        items={trendingGifItems}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      />
      <div className="relative py-4 pt-14 text-center sm:pt-8">
        <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
          <span className="relative inline-block">Trending Stickers</span>
        </h1>
        <Link
          to="/stickers/trending/"
          className="absolute -right-2 top-4 inline-flex items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text active:translate-y-0.5 active:shadow-fieldClick dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f] dark:active:shadow-darkFieldClick sm:right-0 sm:top-4"
        >
          See more...
        </Link>
      </div>
      <AliceCarousel
        mouseTracking
        items={trendingStickerItems}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      />
    </>
  )
}

export default React.memo(Carousel)
