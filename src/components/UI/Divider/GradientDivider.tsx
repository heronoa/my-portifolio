"use client";
import React, { CSSProperties, useEffect, useState } from "react";
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
  const [randomValues, setRandomValues] = useState<CSSProperties[]>();

  useEffect(() => {
    const randomizeValues = () => {
      return Array.from({ length: 100 }).map(() => ({
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 100}%`,
      }));
    };

    const newRandomValues = randomizeValues();
    setRandomValues(newRandomValues);

    console.log({ newRandomValues });
  }, []);

  return (
    <Box
      className={className}
      sx={{
        minHeight: 100,
        height,
        background: `linear-gradient(to right, ${startColor}, ${endColor})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {Array.isArray(randomValues) &&
        randomValues.map(
          ({ animationDelay, animationDuration, left, bottom }, index) => (
            <div
              key={index}
              className="w-1 h-1 bg-accent-gold dark:bg-dark-accentGold rounded-full animate-float"
              style={{
                animationDelay,
                animationDuration,
                left,
                bottom,
                position: "absolute",
              }}
            />
          ),
        )}
    </Box>
  );
};

export default GradientDivider;
