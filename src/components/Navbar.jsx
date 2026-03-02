import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2">
          <img onClick={() => navigate(-1)} className="w-8 bg-black p-2 rounded-full cursor-pointer" src={assets.arrow_left} />
          <img onClick={() => navigate(1)} className="w-8 bg-black p-2 rounded-full cursor-pointer" src={assets.arrow_right} />
        </div>

        <div className="flex items-center gap-3">
          <p className="bg-white text-black px-4 py-1 rounded-full text-sm hidden md:block">
            Explore Premium
          </p>
          <p className="bg-black px-3 py-1 rounded-full text-sm cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center">
            A
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto">
        <p className="bg-white text-black px-4 py-1 rounded-full">All</p>
        <p className="bg-black px-4 py-1 rounded-full">Music</p>
        <p className="bg-black px-4 py-1 rounded-full">Podcast</p>
      </div>
    </>
  )
}

export default Navbar