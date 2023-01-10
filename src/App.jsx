import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Main from './components/mainVideo'
import Detail from './pages/Detail'
import Footer from './components/Footer'
import { Route } from 'wouter'
import './global.css'
import SearchResults from './pages/SearchResults'

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="mx-auto max-w-3xl">
        <Route path="/" component={Home} />
        <Route
          path="/search/:keyword/:rating?/:language?"
          component={SearchResults}
        />
        <Route path="/gif/:id" component={Detail} />
      </div>
      <Footer />
    </>
  )
}
