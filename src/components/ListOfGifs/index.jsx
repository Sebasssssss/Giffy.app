import React from 'react'
import Gifs from '../Gifs'

export default function CardsAbout({ gifs }) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        {gifs.map(({ title, id, url }) => (
          <Gifs key={id} id={id} url={url} title={title} />
        ))}
      </ul>
    </>
  )
}
