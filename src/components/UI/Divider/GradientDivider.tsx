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
    />
  );
};

export default GradientDivider;
