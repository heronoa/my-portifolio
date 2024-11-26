"use client";
import React from "react";
import { Box } from "@mui/material";

interface Props {
  startColor?: string;
  endColor?: string;
  height?: string;
  className?: string;
}

const GradientDivider: React.FC<Props> = ({
  startColor,
  endColor,
  height = "50px",
  className,
}: Props) => {
  return (
    <Box
      className={`w-full ${className}`}
      sx={{
        height,
        background: `linear-gradient(to bottom, ${startColor}, ${endColor})`,
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 flex justify-around flex-nowrap">
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="w-1 h-1 bg-accent-gold dark:bg-dark-accentGold rounded-full animate-float"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default GradientDivider;
