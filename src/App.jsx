import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Main from './components/MainSection'
import Detail from './pages/Detail'
import Footer from './components/Footer'
import SearchResults from './pages/SearchResults'
import TrendingGifPage from './pages/TrendingGifPage'
import StickersPage from './pages/StickersPage'
import { Route, Switch } from 'wouter'
import './global.css'
import '../public/global.css'
import { Helmet } from 'react-helmet'

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="../public/assets/pandita.jpg" />
      </Helmet>
      <Navbar />
      <Main />
      <div className="mx-auto mt-16 max-w-6xl rounded-xl px-4">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gif/trending" component={TrendingGifPage} />
          <Route path="/stickers/trending" component={StickersPage} />
          <Route path="/search/:keyword/:rating?" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </Switch>
      </div>
      <Footer />
    </>
  )
}
