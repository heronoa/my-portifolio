"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
interface WritingAnimationProps {
  texts: string[];
}

const WritingAnimation: React.FC<
  WritingAnimationProps & React.HTMLAttributes<HTMLDivElement>
> = ({ texts, ...props }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, typingSpeed]);

  return (
    <div
      {...props}
      style={{
        width: `${Math.max(...texts.map(text => text.length))}ch`,
        height: "28px",
      }}
    >
      <motion.span
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentText}
      </motion.span>
    </div>
  );
};

export default WritingAnimation;
