import React, { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true; // Activar el loop
      audio.volume = 0.1; // Establecer el volumen al 10%
      audio.play().catch((error) => {
        console.error("El audio no se pudo reproducir automáticamente:", error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} style={{ display: "none" }}>
      <source src="/audio.mp3" type="audio/mp3" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
};

export default AudioPlayer;
