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
      <h1 className="font-bold text-xl my-4 underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-700 decoration-4">
        Trending Searches
      </h1>
      <div className="flex flex-wrap gap-2 p-4">
        {trends.map(singleTrend => (
          <Link
            to={`/search/${singleTrend}`}
            className="border p-1 rounded border-slate-700/20 hover:-translate-y-0.5 hover:border-[#ebbcba] dark:hover:border-[#31748f] hover:shadow transition-all duration-200"
            key={singleTrend}
          >
            {singleTrend}
          </Link>
        ))}
      </div>
    </>
  )
}
