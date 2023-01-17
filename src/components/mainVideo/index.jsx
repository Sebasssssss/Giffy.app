import React from 'react'
import video from '../../assets/mainVideo.mp4'
import SearchForm from '../../components/SearchForm'

export default function Main() {
  return (
    <main className="relative h-80 pt-[40px]">
      <div className="absolute flex h-80 w-full flex-col justify-center gap-4 overflow-hidden bg-cover py-5 text-center shadow-black drop-shadow-lg">
        <video
          className="absolute h-[550px] w-full object-cover opacity-30 md:h-full"
          src={video}
          playsInline
          autoPlay
          muted
          loop
        />
        <div className="z-10 text-2xl">
          <SearchForm />
        </div>
      </div>
    </main>
  )
}
