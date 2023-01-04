import React from 'react'
import Gifs from './Gifs'

export default function CardsAbout({ gifs }) {
  return (
    <>
      <ul className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 text-center gap-4">
        {gifs.map(({ title, id, url }) => (
          <Gifs key={id} id={id} url={url} title={title} />
        ))}
      </ul>
    </>
  )
}
