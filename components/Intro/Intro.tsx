import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("introShown");
    }
    return true;
  });
  const [text, setText] = useState<string>("sridhar");
  const [textWhiteLoader, setTextWhiteLoader] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!show) return;

    const textTimer = setTimeout(() => {
      setText("portfolio");
    }, 1600);

    const loaderTimer = setTimeout(() => {
      setTextWhiteLoader(true);
    }, 2500);

    const showTimer = setTimeout(() => {
      setShow(false);
      localStorage.setItem("introShown", "true");
    }, 3000);

    const counterInterval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(textTimer);
      clearInterval(counterInterval);
      clearInterval(loaderTimer);
    };
  }, [show]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="h-screen w-screen fixed z-[99999] flex justify-center items-center overflow-hidden bg-white milker-font"
        >
          <div className="absolute inset-0 bg-alt-black animate-[slideIn_3s_ease-in]" />
          <div className="flex flex-col items-center relative z-10">
            <motion.h1
              key={text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              className={`text-8xl transition-colors duration-300 ${
                text === "portfolio" ? "text-white" : "text-black"
              }`}
            >
              {text}
            </motion.h1>
            <span
              className={`text-8xl mt-4 transition-colors duration-300 fixed bottom-10 right-10 ${
                textWhiteLoader ? "text-white" : "text-black"
              }`}
            >
              {count}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
