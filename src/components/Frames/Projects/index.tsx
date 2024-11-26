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
        <h1 className="dark:text-white text-dark text-center">
          Projects Section
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
