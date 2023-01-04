import React from 'react'
import Navbar from './components/navbar'
import Home from './Home'
import Main from './components/mainVideo'
import Detail from './Detail'
import Footer from './components/footer'
import { Route } from 'wouter'
import './global.css'
import SearchResults from './pages/SearchResults'

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="max-w-3xl mx-auto">
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </div>
      <Footer />
    </>
  )
}
