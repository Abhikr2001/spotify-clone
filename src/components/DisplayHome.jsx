import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      <div className="mb-6">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome