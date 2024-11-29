"use client";
import React, { useRef, useState } from "react";
import { Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import DraggableGrid from "../Animations/DraggableGrid";
import InteractableCarousel from "../Carousel/InteractableCarousel";
import { AnimatePresence, motion } from "framer-motion";

const DisplayProjects: React.FC = () => {
  const [view, setView] = useState<"carousel" | "grid">("carousel");
  const [notificationOn, setNotificationOn] = useState(false);
  let notificationTimeout: NodeJS.Timeout;

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: "carousel" | "grid",
  ) => {
    if (window.innerWidth < 1024) {
      setNotificationOn(true);

      notificationTimeout = setTimeout(() => {
        setNotificationOn(false);
      }, 5000);
      return;
    }

    setView(nextView);
  };

  const projects = [
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
      description: "This current website. If you are curious on how I make it",
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
      tech: ["vuejs", "tailwindcss", "cypressio", "eslint", "typescript"],
      url: "https://github.com/heronoa/vuejs-turnbased-game",
    },
    {
      img: "/images/turnbased-game-server.png",
      title: "Node Turn-Based Game Server",
      description:
        "The server-side of a turn based game, featuring matchmaking and socket connection, also build login and sign systems",
      tech: ["nodejs", "mongodb", "express", "typescript", "prisma"],
      url: "https://github.com/heronoa/turnbased-pvp-colyseus",
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
  ];

  return (
    <>
      <div className="container mx-auto p-4 items-start">
        <ToggleButtonGroup
          className=""
          orientation="horizontal"
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="carousel" aria-label="carousel">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="mt-4 flex justify-center items-start min-h-[1000px] sm:min-h-[900px]">
          {view === "carousel" ? (
            <InteractableCarousel
              className="max-w-screen sm:max-w-[500px] lg:max-w-[100vw] "
              slides={projects}
              options={{ loop: true }}
            />
          ) : (
            <DraggableGrid items={projects} />
          )}
        </div>
      </div>
      <AnimatePresence>
        {notificationOn && (
          <motion.div
            id="notification"
            className="absolute top-0 -right-10 bg-primary-light opacity-0 dark:bg-dark-light dark:text-white text-black p-2 rounded-lg"
            animate={{ x: -200, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            onClick={() => {
              clearTimeout(notificationTimeout);
              setNotificationOn(false);
            }}
          >
            Check that feature on desktop please
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DisplayProjects;
