import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingTerms from '../../services/getTrendingTermsService'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])
  return (
    <>
      <h1 className="my-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
        Trending Searches
      </h1>
      <div className="flex flex-wrap gap-2 p-4">
        {trends.map(singleTrend => (
          <Link
            to={`/search/${singleTrend}`}
            className="rounded border border-slate-700/20 p-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ebbcba] hover:shadow dark:hover:border-[#31748f]"
            key={singleTrend}
          >
            {singleTrend}
          </Link>
        ))}
      </div>
    </>
  )
}
