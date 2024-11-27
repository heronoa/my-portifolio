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
            slides={[
              {
                img: "/images/dev-manager.png",
                title: "Dev Manager",
                description:
                  "Web app to manager developers team, with analytics, login system and projects creation",
                tech: [
                  "nextjs",
                  "tailwindcss",
                  "framermotion",
                  "firebase",
                  "react",
                  "typescript",
                ],
                url: "https://github.com/heronoa/developer_manager",
              },
              {
                img: "/images/payments-api.png",
                title: "Payments Api",
                description: "Web app to manager debts",
                tech: ["nodejs", "mongodb", "express", "typescript", "prisma"],
                url: "https://github.com/heronoa/payments-api",
              },
              {
                img: "/images/portifolio.png",
                title: "Portifolio",
                description:
                  "This current website. If you are curious on how I make it",
                tech: [
                  "nextjs",
                  "tailwindcss",
                  "threejs",
                  "react",
                  "eslint",
                  "typescript",
                ],
                url: "https://github.com/heronoa/my-portifolio",
              },
              {
                img: "/images/vuejs-turnbased-game.png",
                title: "Vuejs Turn-Based Game",
                description:
                  "A turn based game where you can create character play against bots or real players created to pratice vuejs",
                tech: [
                  "vuejs",
                  "tailwindcss",
                  "cypressio",
                  "eslint",
                  "typescript",
                ],
                url: "https://github.com/heronoa/vuejs-turnbased-game",
              },
              {
                img: "/images/turnbased-game-server.png",
                title: "Node Turn-Based Game Server",
                description:
                  "The server-side of a turn based game, featuring matchmaking and socket connection, also build login and sign systems",
                tech: ["nodejs", "mongodb", "express", "typescript", "prisma"],
                url: "https://github.com/heronoa/colyseus-turngame",
              },
              {
                img: "/images/rabbitmq.png",
                title: "RabbitMQ MicroServices Example",
                description:
                  "A sample on how to build a microservices architecture using RabbitMQ and practice clean architecture",
                tech: [
                  "nodejs",
                  "mongodb",
                  "express",
                  "javascript",
                  "mongoose",
                  "rabbitmq",
                ],
                url: "https://github.com/heronoa/rabbitmq-getting-start",
              },
            ]}
            options={{ loop: true }}
            className="w-[90%] max-w-[1400px]"
          />
        </div>
      </Box>
      <GradientDivider
        height="200px"
        className="to-primary-light dark:to-dark-accentPurple via-dark-light dark:via-dark from-dark-light dark:from-dark bg-gradient-to-t -bottom-[1px] absolute z-30"
      />
    </Box>
  );
};

export default Projects;
