import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import musicFile from "../assets/song.mp3";
import Lily from "../assets/lily.png";
import SunFlower from "../assets/sunflower.png";

const FLOWERS = [
  {
    src: SunFlower,
    width: 250,
    height: 250,
    top: -250,
    left: "calc(100vw / 2 - 125px)",
    topFinal: -125,
    index: 3,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: -200,
    left: "calc(100vw / 2 - 250px)",
    topFinal: -100,
    index: 2,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: -200,
    left: "calc(100vw / 2 + 50px)",
    topFinal: -100,
    index: 2,
  },
  {
    src: SunFlower,
    width: 250,
    height: 250,
    top: window.innerHeight,
    left: "calc(100vw / 2 - 125px)",
    topFinal: window.innerHeight - 125,
    index: 3,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: window.innerHeight,
    left: "calc(100vw / 2 - 250px)",
    topFinal: window.innerHeight - 100,
    index: 2,
  },
  {
    src: SunFlower,
    width: 200,
    height: 200,
    top: window.innerHeight,
    left: "calc(100vw / 2 + 50px)",
    topFinal: window.innerHeight - 100,
    index: 2,
  },
];

export default function Letter() {
  const audioRef = useRef(new Audio(musicFile));
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-pink-50">
      <div className="relative w-100 h-40 flex justify-center">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 w-75 h-40 bg-rose-200 z-10"
            />
          )}
        </AnimatePresence>
        <motion.div
          initial={{ width: 200, height: 80 }}
          animate={{ width: open ? 320 : 200, height: open ? 375 : 80 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white z-20"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.25 }}
                className="p-4"
              >
                <p className="text-lg mb-2">Pixie,</p>
                <p className="text-lg text-justify mb-2">
                  Get well soon! I will always be there for you because this
                  love leaves a permanent mark.
                </p>
                <p className="text-lg text-justify mb-2">
                  Jaldi se theek hoja I want to see you, hug you, and kiss you!
                </p>
                <p className="text-lg text-justify">
                  Vese toh main yeh sab kehta rahta hu but I wanted to find new
                  ways to say <span className="font-medium">I LOVE YOU ❤️</span>
                </p>
                <img src={Lily} className="w-30 mx-auto" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 w-75 h-40 bg-rose-400 z-40"
              style={{
                clipPath: "polygon(0 0, 50% 65%, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const audio = audioRef.current;
                audio.loop = true;

                audio
                  .play()
                  .catch((error) => console.error("playback failed:", error));

                setOpen(true);
              }}
              className="rounded-md bg-[#e11d48] px-6 py-2 text-white absolute -bottom-20 z-100"
            >
              Open Me
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <AnimatePresence>
          {open &&
            FLOWERS.map((flower) => (
              <motion.img
                src={flower.src}
                style={{
                  width: flower.width,
                  height: flower.height,
                  position: "absolute",
                  zIndex: flower.index,
                }}
                initial={{
                  y: flower.top,
                  x: flower.left,
                }}
                exit={{
                  y: flower.top,
                }}
                animate={{
                  rotate: 360,
                  y: flower.topFinal,
                }}
                transition={{
                  rotate: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
