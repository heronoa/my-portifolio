"use client";
import React from "react";

interface MovableBackgroundColorProps {
  text: string;
}

const MovableBackgroundColor: React.FC<MovableBackgroundColorProps> = ({
  text,
}) => {
  return (
    <div className="text-5xl font-extrabold">
      <span className="bg-clip-text text-transparent bg-gradient-to-tl bg-[length:200%_100%] from-accent-purple dark:from-dark-accentPurple animate-shimmer-slow !duration-500 dark:to-accent-green to-dark-accentGreen ">
        {text}
      </span>
    </div>
  );
};

export default MovableBackgroundColor;
