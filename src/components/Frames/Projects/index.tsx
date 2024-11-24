import React from "react";
import { Container, Box } from "@mui/material";
import "tailwindcss/tailwind.css";

const Projects: React.FC = () => {
  return (
    <Box
      className="bg-primary dark:bg-dark flex justify-center items-center w-screen h-screen"
      id="projects"
    >
      <Container>
        <h1 className="text-white">Projects Section</h1>
      </Container>
    </Box>
  );
};

export default Projects;
