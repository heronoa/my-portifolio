"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WritingAnimationProps {
  text: string;
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomLetter = () => {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return letters[Math.floor(Math.random() * letters.length)];
};

const WritingAnimation: React.FC<WritingAnimationProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [randomLetter, setRandomLetter] = useState(getRandomLetter());

  useEffect(() => {
    if (currentIndex < text.length) {
      const interval = setInterval(() => {
        setRandomLetter(getRandomLetter());
        setBgColor(getRandomColor());
      }, 50);

      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        clearInterval(interval);
      }, 500);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [currentIndex, text]);

  return (
    <div className="flex gap-1">
      {displayedText.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
      {currentIndex < text.length && (
        <motion.span
          style={{ backgroundColor: bgColor }}
          animate={{
            opacity: [0, 1, 0],
            transition: { duration: 0.5, repeat: Infinity },
          }}
        >
          {randomLetter}
        </motion.span>
      )}
    </div>
  );
};

export default WritingAnimation;
