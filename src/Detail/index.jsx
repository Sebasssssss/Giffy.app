import useSingleGif from '../hooks/useSingleGif'
import React from 'react'
import Loader from '../components/Loader'

export default function Detail({ params }) {
  const { gif, isLoading } = useSingleGif({ id: params.id })
  if (!gif) return null

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 mt-24 gap-4 p-4">
          <img
            src={gif.url}
            className="w-full mb-8 border border-slate-300 dark:border-slate-700 rounded-xl"
          />
          <div className="flex flex-col border-b">
            <h1 className="text-3xl text-left font-mplus">{gif.title}</h1>
            <h1 className="text-left py-2 pb-4">{gif.title}</h1>
          </div>
        </div>
      )}
    </>
  )
}
