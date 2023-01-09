import Loader from '../../components/Loader'
import React, { Suspense } from 'react'
import useNearScreen from '../../hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' })

  return (
    <div ref={fromRef}>
      <Suspense falback={<Loader />}>
        {isNearScreen ? <TrendingSearches /> : <Loader />}
      </Suspense>
    </div>
  )
}
