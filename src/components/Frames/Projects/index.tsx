import React from "react";
import { Container, Box } from "@mui/material";
import "tailwindcss/tailwind.css";

const Projects: React.FC = () => {
  return (
    <Box
      className="bg-primary-light dark:bg-dark-accentPurple flex justify-center items-center w-screen h-screen relative z-20"
      id="projects"
    >
      <Container className="w-full h-full">
        <h1 className="text-white text-center">Projects Section</h1>
      </Container>
    </Box>
  );
};

export default Projects;
