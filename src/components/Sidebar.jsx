import React from 'react'
import { assets } from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate=useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-6 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-6 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded overflow-y-auto">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded">
          <h1 className="font-semibold">Create your first playlist</h1>
          <p className="font-light text-sm mt-1">It’s easy, we’ll help you</p>
          <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4 text-sm">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded mt-4">
          <h1 className="font-semibold">Let’s find podcasts</h1>
          <p className="font-light text-sm mt-1">We’ll keep you updated</p>
          <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4 text-sm">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar