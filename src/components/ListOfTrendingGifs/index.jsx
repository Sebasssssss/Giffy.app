import React from 'react'
import TrendingGifs from '../TrendingGifs'

export default function ListOfTrendingGifs({ trendingGifs }) {
  return (
    <>
      {trendingGifs.map(({ title, id, url }) => (
        <TrendingGifs key={id} title={title} id={id} url={url} />
      ))}
    </>
  )
}
