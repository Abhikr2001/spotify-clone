import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {

const {playWithId}=useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className="min-w-[150px] sm:min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition">
      <img
        className="rounded aspect-square object-cover"
        src={image}
        alt={name}
      />
      <p className="font-bold mt-2 mb-1 truncate">{name}</p>
      <p className="text-slate-200 text-sm line-clamp-2">{desc}</p>
    </div>
  )
}

export default SongItem