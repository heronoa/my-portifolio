import React from "react";
import { Container, Box } from "@mui/material";
import "tailwindcss/tailwind.css";
import GradientDivider from "@/components/UI/Divider/GradientDivider";
import DisplayProjects from "@/components/UI/DisplayProjects";

const Projects: React.FC = () => {
  return (
    <Box
      className="bg-primary-light relative dark:bg-dark-accentPurple flex justify-center items-start w-screen min-h-screen pb-[40px] lg:pb-[200px] z-20"
      id="projects"
    >
      <Box className="w-full h-full lg:mt-[-100px]">
        <h1 className="text-center lg:mb-8 lg:text-4xl text-2xl font-bold bg-clip-text text-transparent animate-shimmer bg-[linear-gradient(110deg,#121212,45%,#EAF2F8,55%,#121212)] bg-[length:200%_100%]">
          My Projects
        </h1>
        <DisplayProjects />
      </Box>
      <GradientDivider
        height="200px"
        className="to-primary-light dark:to-dark-accentPurple !w-screen via-black  from-black bg-gradient-to-t -bottom-[1px] absolute z-30"
      />
    </Box>
  );
};

export default Projects;
