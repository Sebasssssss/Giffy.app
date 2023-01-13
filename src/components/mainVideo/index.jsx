import React from 'react'
import video from '../../assets/mainVideo.mp4'

export default function Main() {
  return (
    <main className="relative h-80 pt-[56px]">
      <div className="absolute flex h-80 w-full flex-col justify-center gap-4 overflow-hidden bg-cover py-5 text-center shadow-black drop-shadow-lg">
        <video
          className="absolute h-[550px] w-full object-cover opacity-30 md:h-full"
          src={video}
          playsInline
          autoPlay
          muted
          loop
        />
        <h1 className="z-10 font-mplus text-4xl font-medium">
          Giffy{' '}
          <span className="text-gold transition-colors duration-500 dark:text-pine">
            app
          </span>
        </h1>
      </div>
    </main>
  )
}
