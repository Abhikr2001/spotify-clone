import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Dislpay = () => {
  const displayRef = useRef()
  const location = useLocation()

  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? Number(location.pathname.split("/").pop()) : null
  const bgColor = isAlbum ? albumsData[albumId]?.bgColor : "#121212"

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.style.background = isAlbum
        ? `linear-gradient(${bgColor}, #121212)`
        : "#121212"
    }
  }, [isAlbum, bgColor])

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-4 sm:px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Dislpay