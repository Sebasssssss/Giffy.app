import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import TitlesCarousel from '../../components/TitlesCarousel'
import carouselHook from './hook'
import 'react-alice-carousel/lib/alice-carousel.css'

function Carousel() {
  const { trendingStickerItems, trendingGifItems, responsive } = carouselHook()

  return (
    <>
      <TitlesCarousel title="Trending Gifs" to="gif" />
      <AliceCarousel
        mouseTracking
        items={trendingGifItems}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      />

      <TitlesCarousel title="Trending Stickers" to="stickers" />
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
