import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import TitleGifCarousel from '../../components/TitleGifCarousel'
import TitleStickersCarousel from '../../components/TitleStickersCarousel'
import carouselHook from './hook'
import 'react-alice-carousel/lib/alice-carousel.css'

function Carousel() {
  const { trendingStickerItems, trendingGifItems, responsive } = carouselHook()

  return (
    <>
      <TitleGifCarousel />
      <AliceCarousel
        mouseTracking
        items={trendingGifItems}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      />

      <TitleStickersCarousel />
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
