import React from "react";
import { Container, Box } from "@mui/material";
import "tailwindcss/tailwind.css";
import WavyDivider from "@/components/UI/Divider";
import InfinityCarousel from "@/components/UI/Animations/InfinityCarousel";
const techs = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "TailwindCSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    alt: "Redis",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    alt: "Docker",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "AWS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    alt: "Vue.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    alt: "NestJS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    alt: "Firebase",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    alt: "RabbitMQ",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    alt: "Vercel",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    alt: "Jest",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    alt: "Vitest",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    alt: "Cypress",
  },
];

const About: React.FC = () => {
  return (
    <Box
      className="bg-primary dark:bg-dark flex flex-col justify-center items-center w-screen h-screen relative pb-[200px] z-20"
      id="projects"
    >
      <Container className="w-full">
        <h1 className="text-white">About Section</h1>
      </Container>
      <Container className="w-full h-[200px]">
        <InfinityCarousel
          images={techs.slice(Math.ceil(techs.length / 2), techs.length)}
        />
        <InfinityCarousel
          reverse
          images={techs.slice(0, Math.ceil(techs.length / 2))}
        />
      </Container>
      <WavyDivider
        lowerColorClassName="!fill-primary-light dark:!fill-dark-accentPurple"
        upperClassName="lg:!mb-[30px] !mb-[15px]"
      />
      <WavyDivider
        lowerColorClassName="!fill-accent-gold dark:!fill-dark-accentGold "
        upperClassName="lg:!mb-[15px] !mb-[7px]"
        animation="shimmer"
      />
      <WavyDivider
        lowerColorClassName="!fill-primary-light dark:!fill-dark-accentPurple"
        upperClassName="lg:!mb-[-1px] !mb-[-1px]"
      />
    </Box>
  );
};

export default About;
