import React, { useContext } from 'react'
import { assets } from "../assets/assets";
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

  const {
    seekBar,
    seekBg,
    play,
    pause,
    playStatus,
    track,
    time,previous,
    next,seekSong
  } = useContext(PlayerContext);

  return (
    <div className="h-[72px] sm:h-[80px] bg-black flex items-center justify-between text-white px-3 sm:px-6">

      {/* Song Info (Desktop Only) */}
      <div className="hidden sm:flex items-center gap-4 w-[30%]">
        <img
          className="w-12 rounded"
          src={track.image}
          alt=""
        />
        <div className="truncate">
          <p className="font-semibold truncate">
            {track.name}
          </p>
          <p className="text-sm opacity-70 truncate">
            {track.desc}
          </p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col items-center gap-2 w-full sm:w-[40%]">

        {/* Control Buttons */}
        <div className="flex gap-4 items-center">

          <img
            className="w-4 cursor-pointer hidden sm:block opacity-80 hover:opacity-100"
            src={assets.shuffle_icon}
            alt=""
          />

          <img onClick={previous}
            className="w-5 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.prev_icon}
            alt=""
          />

          {/* Play / Pause Toggle */}
          {
            playStatus ? (
              <img
                onClick={pause}
                className="w-5 h-5 cursor-pointer"
                src={assets.pause_icon}
                alt=""
              />
            ) : (
              <img
                onClick={play}
                className="w-5 h-5 cursor-pointer"
                src={assets.play_icon}
                alt=""
              />
            )
          }

          <img onClick={next}
            className="w-5 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.next_icon}
            alt=""
          />

          <img
            className="w-4 cursor-pointer hidden sm:block opacity-80 hover:opacity-100"
            src={assets.loop_icon}
            alt=""
          />

        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-2 w-full">
          <p className="text-xs">{time.currentTime.minute}:{time.currentTime.second}</p>

          <div onClick={seekSong}
            ref={seekBg}
            className="flex-1 bg-gray-500 rounded-full h-1 cursor-pointer"
          >
            <div
              ref={seekBar}
              className="bg-green-500 h-1 rounded-full w-0"
            />
          </div>

          <p className="text-xs">{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>

      </div>

      {/* Right Side Controls (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-3 w-[30%] justify-end opacity-75">
        <img
          className="w-5"
          src={assets.volume_icon}
          alt=""
        />
        <div className="w-20 bg-slate-300 h-1 rounded"></div>
      </div>

    </div>
  )
}

export default Player