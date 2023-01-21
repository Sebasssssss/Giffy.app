import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import SeeMoreButton from '../../components/SeeMoreButton'
import carouselHook from './hook'
import 'react-alice-carousel/lib/alice-carousel.css'

function Carousel() {
  const { trendingStickerItems, trendingGifItems, responsive } = carouselHook()

  return (
    <>
      <div className="relative py-4 text-center">
        <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
          <span className="relative inline-block">Trending Gifs</span>
        </h1>
        <SeeMoreButton />
      </div>
      <AliceCarousel
        mouseTracking
        items={trendingGifItems}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      />
      <div className="relative py-4 text-center">
        <h1 className="fancy pb-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
          <span className="relative inline-block">Trending Stickers</span>
        </h1>
        <SeeMoreButton />
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
