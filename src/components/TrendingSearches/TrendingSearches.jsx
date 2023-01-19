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
      <h1 className="fancy my-4 text-center font-mplus text-lg font-semibold leading-[0.5]">
        <span className="relative inline-block">Trending Searches</span>
      </h1>
      <div className="flex flex-wrap gap-4 p-4">
        {trends.map(singleTrend => (
          <motion.li
            key={singleTrend}
            whileHover={{ scale: [null, 1.08, 1.05], y: [null, -1.9, -1.5] }}
            whileTap={{ scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="list-none"
          >
            <Link
              to={`/search/${singleTrend}`}
              className="inline-flex items-center rounded-lg bg-[#eee] px-3 py-1.5 text-lightcoral shadow-field hover:bg-lightcoral hover:text-text dark:bg-[#85586f] dark:text-text dark:shadow-darkField dark:hover:bg-[#5c527f]"
            >
              {singleTrend}
            </Link>
          </motion.li>
        ))}
      </div>
    </>
  )
}
