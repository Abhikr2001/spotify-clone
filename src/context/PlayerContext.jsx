import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0
    },
    totalTime: {
      second: 0,
      minute: 0
    }
  });

  // ▶ Play
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  // ⏸ Pause
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id)=>{
       await setTrack(songsData[id]);
       await audioRef.current.play();
       setPlayStatus(true);
  }

  const previous = async () =>{
    if (track.id>0){
      await setTrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const next = async () =>{
    if (track.id<songsData.length-1){
      await setTrack(songsData[track.id+1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const seekSong=async(e)=>{
    
    audioRef.current.currentTime =((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
  }

  // ⏳ Update Time Automatically
  useEffect(() => {

    if (!audioRef.current) return;

    const audio = audioRef.current;

    audio.ontimeupdate = () => {
      seekBar.current.style.width= (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60)
        },
        totalTime: {
          second: Math.floor(audio.duration % 60) || 0,
          minute: Math.floor(audio.duration / 60) || 0
        }
      });

      // update seek bar width
      if (seekBar.current && audio.duration) {
        seekBar.current.style.width =
          (audio.currentTime / audio.duration) * 100 + "%";
      }
    };

  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong
    
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;