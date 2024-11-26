"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface BoxWithAnimatedBorderProps {
  children: React.ReactNode;
  bgClassName?: string;
  ballClassName?: string;
  bgPlaneClassName?: string;
}

const BoxWithAnimatedBorder: React.FC<BoxWithAnimatedBorderProps> = ({
  children,
  bgClassName = "",
  ballClassName = "",
  bgPlaneClassName = "",
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="text-white text-center relative flex flex-col items-center justify-center w-full h-full text-sm antialiased flex-1 border-slate-800 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute w-[101%] h-[101%] ${bgPlaneClassName} z-10 overflow-hidden rounded-lg`}
      >
        <motion.div
          className={`absolute z-20 -top-8 -right-8 w-[80px] h-[80px] rounded-full bg-accent-gold dark:bg-dark-accentGold ${ballClassName}`}
          initial={{ opacity: 1 }}
          animate={{
            x: isHovered
              ? 0
              : [0, "-700%", "-700%", "-700%", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            y: isHovered ? 0 : [0, 0, 0, 0, 0, "250%", "250%", "250%", 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
            },
            scale: isHovered ? 20 : 1,
          }}
        ></motion.div>
        <motion.div
          animate={{
            x: isHovered
              ? 0
              : [0, "700%", "700%", "700%", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            y: isHovered ? 0 : [0, 0, 0, 0, 0, "-250%", "-250%", "-250%", 0],
            transition: {
              duration: isHovered ? 10 : 20,
              repeat: Infinity,
              repeatType: "loop",
            },
            scale: isHovered ? 20 : 1,
          }}
          whileHover={{ animationPlayState: "paused", scale: 20 }}
          className={`absolute -bottom-8 -left-8 rounded-full w-[80px] h-[80px] bg-accent-gold dark:bg-dark-accentGold  ${ballClassName}`}
        ></motion.div>
      </div>
      <div
        className={`${bgClassName} bg-accent-purple/[0.8] dark:bg-dark-accentPurple rounded-lg backdrop-blur-xl p-6 z-20`}
      >
        {children}
      </div>
    </div>
  );
};

export default BoxWithAnimatedBorder;
