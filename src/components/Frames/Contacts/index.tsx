"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container, Box, Button } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contacts: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      className="flex relative z-20 justify-start items-start w-screen h-screen bg-dark-light dark:bg-dark"
      id="contact"
    >
      <Container className="container mx-auto p-4">
        <h2 className="text-center font-extrabold text-2xl text-transparent animate-shimmer bg-clip-text  bg-[linear-gradient(110deg,#F1C40F,45%,#FFFFFF,55%,#F1C40F)] dark:bg-[linear-gradient(110deg,#F39C12,45%,#FFFFFF,55%,#F39C12)] bg-[length:200%_100%]">
          Do you want a website like this?
        </h2>
        <div className="flex flex-col lg:flex-row">
          <Button className="font-bold min-h-[160px] flex-1">
            <div className="flex flex-col items-center">
              <p className="normal-case">Send me a email</p>
              <EmailIcon fontSize="large" />
              <a href="mailto:heronoadev@gmail.com" className="hover:underline">
                heronoadev@gmail.com
              </a>
              <a
                href="mailto:heron.amaral@gmail.com"
                className="hover:underline"
              >
                heron.amaral@gmail.com
              </a>
              <a
                href="mailto:heron-amaral@outlook.com"
                className="hover:underline"
              >
                heron-amaral@outlook.com
              </a>
            </div>
          </Button>
          <div className="flex flex-col items-center justify-center">
            <div className="h-1/2 w-px bg-gray-400"></div>
          </div>
          <Button className="font-bold min-h-[160px] flex-1">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <div className="flex flex-col items-center">
                <p className="normal-case">Take a look on my project</p>
                <GitHubIcon fontSize="large" />
                github.com/heronoa
              </div>
            </Link>
          </Button>
          <div className="flex flex-col items-center justify-center">
            <div className="h-1/2 w-px bg-gray-400"></div>
          </div>
          <Button className="font-bold min-h-[160px] flex-1">
            <Link
              href="https://www.linkedin.com/in/heron-amaral-49a9a1179/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <div className="flex flex-col items-center">
                <p className="normal-case">Connect with me</p>
                <LinkedInIcon fontSize="large" />
                Heron Amaral
              </div>
            </Link>
          </Button>
        </div>
      </Container>
    </Box>
  );
};

export default Contacts;
