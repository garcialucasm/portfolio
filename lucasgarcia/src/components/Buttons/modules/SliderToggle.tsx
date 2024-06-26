"use client"

import { FaReact } from "react-icons/fa"
import { PiGearBold } from "react-icons/pi"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonProps } from "@/types/ToggleButtons"
import { useEffect, useState } from "react"
import { useFramerMotion } from "@/context/framerMotion"

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 xl:pl-3 xl:pr-3.5 py-0 xl:py-1.5 transition-colors relative z-10"

export const SliderToggle: React.FC<ToggleButtonProps> = ({
  optionA,
  optionB,
}) => {
  const { motion } = useFramerMotion()
  const { selected, settingToggleBackFront } = useToggleBackFrontContext()
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const pageHeight = document.body.scrollHeight
    const halfPagePosition = pageHeight / 2

    function handleScroll() {
      const position = window.scrollY
      setIsScrolling(position > halfPagePosition)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative flex w-fit items-center">
      <button
        className={`${TOGGLE_CLASSES} ${selected === optionA && "text-white"}`}
        onClick={() => {
          settingToggleBackFront(optionA)
        }}
        aria-label="Toggle to frontend"
      >
        <div className="flex items-center gap-x-2 p-2 font-bold">
          <FaReact
            className={`${selected === optionA && "animate-spin-slow"} relative z-10 text-xl`}
          />
          <span className={`relative z-10`}>{optionA}</span>
        </div>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === optionB && "text-white"}`}
        onClick={() => {
          settingToggleBackFront(optionB)
        }}
        aria-label="Toggle to Backend"
      >
        <div className="flex items-center gap-x-2 p-2 font-bold">
          <PiGearBold
            className={`${selected === optionB && "animate-spin-slow"} relative z-10 text-xl`}
          />
          <span className={`relative z-10`}>{optionB}</span>
        </div>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === optionB ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{
            type: "tween",
            damping: 15,
            stiffness: 250,
            duration: isScrolling ? 0 : 0.2,
          }}
          className={`border-1 h-full w-1/2 rounded-full border-blue-900 border-opacity-10 bg-gradient-to-r from-sky-700 via-indigo-700 to-violet-700 shadow-center-sm shadow-blue-500`}
        />
      </div>
    </div>
  )
}
