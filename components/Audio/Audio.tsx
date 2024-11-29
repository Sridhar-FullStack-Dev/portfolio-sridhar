"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [barColor, setBarColor] = useState("#efefef");

  useEffect(() => {
    const timer = setTimeout(() => {
      setBarColor("#efefef");
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
    <div className="fixed top-10 right-10 flex items-center gap-4 z-10 hidden">
      <audio ref={audioRef} src="/audio/audio.mp3" loop />

      <div
        className="flex justify-center items-center gap-[2px] h-5 cursor-pointer rounded-full"
        onClick={togglePlay}
      >
        {bars.map((_, index) => (
          <motion.div
            key={index}
            className={`w-[4px] rounded-full`}
            style={{ backgroundColor: barColor }}
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
