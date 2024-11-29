"use client";
import React from "react";
import Link from "next/link";
import { Container, Box, Button } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ThreeDLetters from "@/components/UI/ThreeDLetters";

const ContactLink: React.FC<{
  href: string;
  target?: string;
  rel?: string;
  text: string;
  icon: React.ReactNode;
  linkText?: string;
}> = ({ href, target, rel, text, icon, linkText }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    passHref
    className="flex-1 flex justify-center items-center hover:animate-pulse min-h-[200px] rounded-lg hover:bg-primary/10 group"
  >
    <Button className="font-bold min-h-[200px] flex justify-center items-center flex-1 border-b border-solid lg:border-0 border-gray-400">
      <div className="flex flex-col items-center">
        <p className="normal-case text-primary-light group-hover:underline">
          {text}
        </p>
        <p className="text-primary-light group-hover:text-primary">{icon}</p>
        {linkText && <a className="group-hover:underline">{linkText}</a>}
      </div>
    </Button>
  </Link>
);

const Contacts: React.FC = () => {
  return (
    <Box
      className="flex flex-col relative z-20 justify-start items-start w-screen min-h-md lg:h-[500px] mb-6 lg:mb-0 bg-black"
      id="contact"
    >
      <Container className="container mx-auto p-4 z-10">
        <h2 className="text-center font-extrabold text-2xl text-transparent animate-shimmer bg-clip-text  bg-[linear-gradient(110deg,#F1C40F,45%,#FFFFFF,55%,#F1C40F)] dark:bg-[linear-gradient(110deg,#F39C12,45%,#FFFFFF,55%,#F39C12)] bg-[length:200%_100%]">
          Do you want a website like this?
        </h2>
        <div className="flex flex-col lg:flex-row">
          <ContactLink
            href="mailto:heron.amaral@gmail.com"
            text="Send me an email"
            icon={<EmailIcon fontSize="large" />}
            linkText="heron.amaral@gmail.com"
          />
          <div className="flex-col hidden lg:flex items-center justify-center ">
            <div className="h-1/2 w-px bg-gray-400"></div>
          </div>
          <ContactLink
            href="https://github.com/heronoa"
            text="Take a look into my project"
            icon={<GitHubIcon fontSize="large" />}
            linkText="github.com/heronoa"
          />
          <div className="flex-col hidden lg:flex items-center justify-center">
            <div className="h-1/2 w-px bg-gray-400"></div>
          </div>
          <ContactLink
            href="https://www.linkedin.com/in/heron-amaral-49a9a1179/"
            text="Connect with me"
            icon={<LinkedInIcon fontSize="large" />}
            linkText="Heron Amaral"
          />
        </div>
      </Container>
      <div className="absolute inset-0 -z-10">
        <ThreeDLetters />
      </div>
    </Box>
  );
};

export default Contacts;
