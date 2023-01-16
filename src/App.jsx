import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Main from './components/mainVideo'
import Detail from './pages/Detail'
import Footer from './components/Footer'
import { Route } from 'wouter'
import SearchResults from './pages/SearchResults'
import TrendingGifPage from './pages/TrendingGifPage'
import StickersPage from './pages/StickersPage'
import './global.css'
import '../public/global.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="mx-auto mt-16 max-w-6xl rounded-xl">
        <Route path="/" component={Home} />
        <Route path="/gif/trending" component={TrendingGifPage} />
        <Route path="/stickers/trending" component={StickersPage} />
        <Route path="/search/:keyword/:rating?/" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </div>
      <Footer />
    </>
  )
}
