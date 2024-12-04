"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [barPos, setBarPos] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBarPos(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const bars = Array(3).fill(0);

  return (
    <div
      className={`fixed ${
        barPos ? "bottom-10 left-10" : "top-10 right-10"
      } flex items-center gap-4 z-[99]`}
    >
      <audio ref={audioRef} src="/audio/audio.mp3" loop />

      <div
        className="flex justify-center items-center gap-[2px] h-5 cursor-pointer rounded-full"
        onClick={togglePlay}
      >
        {bars.map((_, index) => (
          <motion.div
            key={index}
            className={`w-[4px] rounded-full`}
            style={{ backgroundColor: "white" }}
            animate={{
              height: "15px",
            }}
            {...(isPlaying && {
              animate: {
                height: [15, 30, 15],
              },
              transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              },
            })}
          />
        ))}
      </div>
    </div>
  );
}
