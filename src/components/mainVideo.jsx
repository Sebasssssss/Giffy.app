import React from 'react'
import video from '../assets/mainVideo.mp4'

export default function Main() {
  return (
    <main className="h-80 pt-[56px] relative">
      <div className="flex flex-col gap-4 justify-center text-center py-5 absolute w-full bg-cover h-80 drop-shadow-lg shadow-black overflow-hidden">
        <video
          className="absolute opacity-30 w-full h-[550px] md:h-full object-cover"
          src={video}
          playsInline
          autoPlay
          muted
          loop
        />
        <h1 className="text-sm z-10 uppercase">Welcome to the</h1>
        <h1 className="text-4xl font-medium font-mplus z-10">
          Giffy <span className="text-[#f6c177] dark:text-[#31748f] transition-colors duration-500">app</span>
        </h1>
      </div>
    </main>
  )
}
