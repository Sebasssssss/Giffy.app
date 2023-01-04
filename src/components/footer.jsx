import React from 'react'
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube
} from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="w-full mt-4 grid items-center justify-center overflow-hidden">
      <h1 className="font-semibold opacity-50">
        You can contact me on my social media!
      </h1>
      <div className="inline-flex items-center justify-center gap-2 text-2xl p-4">
        <a href="#">
          <AiFillInstagram className="hover:scale-125 hover:-translate-y-1 opacity-50 hover:opacity-100 transition-all duration-300" />
        </a>
        <a href="#">
          <AiOutlineTwitter className="hover:scale-125 hover:-translate-y-1 opacity-50 hover:opacity-100 transition-all duration-300" />
        </a>
        <a href="#">
          <BsTwitch className="hover:scale-125 hover:-translate-y-1 opacity-50 hover:opacity-100 transition-all duration-300" />
        </a>
        <a href="#">
          <AiFillYoutube className="hover:scale-125 hover:-translate-y-1 opacity-50 hover:opacity-100 transition-all duration-300" />
        </a>
      </div>
    </footer>
  )
}
