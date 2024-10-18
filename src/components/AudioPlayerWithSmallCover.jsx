import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";

export default function AudioPlayerWithSmallCover({
  src,
  coverSrc,
  title,
  artist,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("error", handleError);

    console.log("Eventos de audio registrados");

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleCanPlayThrough = () => {
    console.log("Audio can play through");
  };

  const handleError = (event) => {
    console.error("Error occurred while playing audio:", event);
    alert("An error occurred while trying to play the audio.");
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((e) => {
          console.error("Error playing audio:", e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const volumeValue = parseFloat(e.target.value);
    setVolume(volumeValue);
    audioRef.current.volume = volumeValue;
    setIsMuted(volumeValue === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, #4f3f66 0%, #3b2e5f 25%, #1f1f59 50%, #001253 75%, #00004e 100%)",
      }}
      className="w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden"
    >
      <div className="flex justify-center items-center pt-4">
        <div className="relative w-20 h-20">
          <img
            src={coverSrc}
            alt={`Cover art for ${title} by ${artist}`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-sm font-bold mb-1 text-center">{title}</h2>
        <p className="mb-4 text-center">{artist}</p>

        <audio ref={audioRef} src={src} preload="auto" />

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-[#493A64] hover:scale-110 transition-all duration-150"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={handleRestart}
            className="p-2 rounded-full bg-[#493A64] hover:scale-110 transition-all duration-150"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-[#493A64] hover:scale-110 transition-all duration-150"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full"
          />
          <span className="text-sm">{formatTime(duration)}</span>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Volume2 className="h-4 w-4" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
