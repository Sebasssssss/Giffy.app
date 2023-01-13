import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingTerms from '../../services/getTrendingTermsService'
import { motion } from 'framer-motion'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])
  return (
    <>
      <h1 className="my-4 px-4 text-xl font-bold underline decoration-zinc-400 decoration-4 underline-offset-4 dark:decoration-zinc-700">
        Trending Searches
      </h1>
      <div className="flex flex-wrap gap-4 p-4">
        {trends.map(singleTrend => (
          <motion.li
            key={singleTrend}
            whileHover={{ scale: [null, 1.08, 1.05], y: [null, -1.9, -1.5] }}
            transition={{ duration: 0.3 }}
            className="list-none"
          >
            <Link
              to={`/search/${singleTrend}`}
              className="rounded border border-slate-700/20 p-1 hover:border-gold dark:hover:border-pine"
            >
              {singleTrend}
            </Link>
          </motion.li>
        ))}
      </div>
    </>
  )
}
