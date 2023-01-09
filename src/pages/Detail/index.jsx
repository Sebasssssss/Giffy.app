import useSingleGif from '../../hooks/useSingleGif'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
  const { gif } = useSingleGif({ id: params.id })
  if (!gif) return null
  const title = gif ? gif.title : ''

  return (
    <>
      <>
        <Helmet>
          <title>{title} | Giffy</title>
        </Helmet>
        <div className="mt-24 grid grid-cols-1 gap-4 p-4">
          <img
            src={gif.url}
            className="mb-8 w-full rounded-xl border border-slate-300 dark:border-slate-700"
          />
          <div className="flex flex-col border-b">
            <h1 className="text-left font-mplus text-3xl">{gif.title}</h1>
            <h1 className="py-2 pb-4 text-left">{gif.title}</h1>
          </div>
        </div>
      </>
    </>
  )
}
