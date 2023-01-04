import Loader from '../../components/Loader'
import React, { Suspense } from 'react'
import useNearScreen from '../../hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })

  return (
    <div className="min-h-screen" ref={fromRef}>
      <Suspense falback={<Loader />}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  )
}
