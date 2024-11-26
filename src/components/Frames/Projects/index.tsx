import React from "react";
import { Container, Box } from "@mui/material";
import "tailwindcss/tailwind.css";
import GradientDivider from "@/components/UI/Divider/GradientDivider";
import InteractableCarousel from "@/components/UI/Carousel/InteractableCarousel";

const Projects: React.FC = () => {
  return (
    <Box
      className="bg-primary-light relative dark:bg-dark-accentPurple flex justify-center items-center w-screen min-h-screen pb-[40px] lg:pb-[200px] z-20"
      id="projects"
    >
      <Box className="w-full h-full lg:mt-[-100px]">
        <h1 className="text-center mb-8 lg:text-4xl text-2xl font-bold bg-clip-text text-transparent animate-shimmer bg-[linear-gradient(110deg,#121212,45%,#EAF2F8,55%,#121212)] bg-[length:200%_100%]">
          My Projects
        </h1>
        <div className="flex justify-center items-center">
          <InteractableCarousel
            slides={[1, 2, 3, 4, 5]}
            options={{ loop: true }}
            className="w-[90%] max-w-[1400px]"
          />
        </div>
      </Box>
      <GradientDivider
        height="200px"
        className="to-primary-light dark:to-dark-accentPurple via-dark-light dark:via-dark from-dark-light dark:from-dark bg-gradient-to-t bottom-0 absolute z-30"
      />
    </Box>
  );
};

export default Projects;
