import React from 'react'
import Stickers from '../Stickers'

export default function ListOfStickers({ stickers }) {
  return (
    <>
      {stickers.map(({ title, id, url }) => (
        <Stickers key={id} title={title} id={id} url={url} />
      ))}
    </>
  )
}
