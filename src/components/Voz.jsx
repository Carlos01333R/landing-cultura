"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function AudioPlayerVoz({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="">
      <audio ref={audioRef} src={src} className="hidden" />
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={togglePlayPause}
          className="bg-black hover:bg-zinc-900 text-white rounded-full p-3 focus:outline-none"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
    </div>
  );
}
