"use client"

import { FaReact } from "react-icons/fa"
import { PiGearBold } from "react-icons/pi"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonProps } from "@/types/ToggleButtons"
import { motion } from "framer-motion"

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 xl:pl-3 xl:pr-3.5 py-0 xl:py-1.5 transition-colors relative z-10"

export const SliderToggle: React.FC<ToggleButtonProps> = ({
  optionA,
  optionB,
}) => {
  const { selected, settingToggleBackFront } = useToggleBackFrontContext()
  return (
    <div className="relative flex w-fit items-center">
      <button
        className={`${TOGGLE_CLASSES} ${selected === optionA && "text-purple-700"}`}
        onClick={() => {
          settingToggleBackFront(optionA)
        }}
      >
        <div className="flex items-center gap-x-2 p-2 font-bold">
          <FaReact
            className={`${selected === optionA && "animate-spin-slow"} relative z-10 text-xl`}
          />
          <span className={`relative z-10`}>{optionA}</span>
        </div>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === optionB && "text-purple-700"}`}
        onClick={() => {
          settingToggleBackFront(optionB)
        }}
      >
        <div className="flex items-center gap-x-2 p-2 font-bold">
          <PiGearBold
            className={`${selected === optionB && "animate-spin-slow"} relative z-10 text-xl`}
          />
          <span className={`relative z-10`}>{optionB}</span>
        </div>
      </button>
      <div
        className={`absolute inset-0 z-0 flex transition-none ${
          selected === optionB ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{
            type: "tween",
            damping: 15,
            stiffness: 250,
            duration: 0.2,
          }}
          className={`h-full w-1/2 rounded-full border border-purple-500 bg-gradient-to-b from-slate-50 to-slate-200 shadow-center-sm shadow-purple-500`}
        />
      </div>
    </div>
  )
}
