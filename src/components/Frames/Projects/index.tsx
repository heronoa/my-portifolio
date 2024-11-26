import React from "react";
import { Container, Box } from "@mui/material";
import "tailwindcss/tailwind.css";
import GradientDivider from "@/components/UI/Divider/GradientDivider";

const Projects: React.FC = () => {
  return (
    <Box
      className="bg-primary-light relative dark:bg-dark-accentPurple flex justify-center items-center w-screen h-screen z-20"
      id="projects"
    >
      <Container className="w-full h-full">
        <h1 className="text-center mb-8 lg:text-4xl text-2xl font-bold bg-clip-text text-transparent animate-shimmer bg-[linear-gradient(110deg,#121212,45%,#EAF2F8,55%,#121212)] bg-[length:200%_100%]">
          My Projects
        </h1>
      </Container>
      <GradientDivider
        height="200px"
        className="to-primary-light dark:to-dark-accentPurple via-dark-light dark:via-dark from-dark-light dark:from-dark bg-gradient-to-t bottom-0 absolute z-30"
      />
    </Box>
  );
};

export default Projects;
