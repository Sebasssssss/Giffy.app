import React from 'react'
import { Link } from 'wouter'
import SearchForm from '../../components/SearchForm'

export default function Main() {
  return (
    <main className="relative grid h-[100vh] w-full items-center justify-center bg-mainBackground bg-cover bg-center">
      <div className="flex flex-col gap-6">
        <Link
          to="/"
          className="text-center font-mplus text-5xl tracking-widest"
        >
          Giffy App
        </Link>
        <h1 className="text-center font-mplus text-xl">by Sebass</h1>
        <div className="z-10 text-2xl">
          <SearchForm />
        </div>
      </div>
    </main>
  )
}
