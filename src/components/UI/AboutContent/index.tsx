"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BoxWithAnimatedBorder from "../Animations/BoxWithAnimatedBorder";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutContent: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <h1 className="text-center mb-8 lg:text-4xl text-2xl font-bold bg-clip-text text-transparent animate-shimmer bg-[linear-gradient(110deg,#121212,45%,#EAF2F8,55%,#121212)] bg-[length:200%_100%]">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <BoxWithAnimatedBorder bgClassName="w-full h-full">
          <>
            <div className="w-full relative flex items-center justify-center mb-8">
              <motion.div
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  e.currentTarget.style.transform = `rotateY(${-x / 5}deg) rotateX(${-y / 5}deg)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform =
                    "rotateY(0deg) rotateX(0deg)";
                }}
                className="relative w-full h-full flex justify-center items-center"
              >
                <div className="bg-accent-green z-[-1] dark:bg-dark-accentGreen aspect-square h-[100%] rounded-full absolute -ml-[20px] lg:-ml-[100px] -mb-[40px]" />
                <Image
                  src="/images/realme.jpeg"
                  width={240}
                  height={240}
                  alt="A photo of me"
                  className="mr-2 rounded-full overflow-hidden z-20"
                />
              </motion.div>
            </div>
            <p>
              Hello! I'm a passionate developer with experience in various
              technologies. I love creating web applications and learning new
              tools and frameworks.
            </p>
            <p className="mt-4">
              My journey in the tech world started with Python and Arduino in a
              physics lab, and I've since expanded my skills to include
              frameworks and tools like React, Next.js, Node.js, and many more.
            </p>

            <p>
              I love to learn how things work beneath the hood and how to
              implement new things. Because of that curious nature, I have
              learned a lot of things in a short period. I'm always eager to
              take on new challenges and collaborate with others to build
              amazing projects. Let's create something great together!
            </p>
          </>
        </BoxWithAnimatedBorder>
        <div className="flex flex-1 flex-col gap-4">
          <BoxWithAnimatedBorder bgClassName="w-full h-full flex justify-center items-center">
            <p className="overflow-visible">
              I study physics at the Federal University of Pará and there was my
              first contact with programming solving problems in an experimental
              physics laboratory. There I worked with Python and Arduino will
              automate some experiments and data collection. I liked it so much
              that I learned more about programming and web development. During
              the pandemic, I dive into web development with the objective of
              solving problems with technology
            </p>
          </BoxWithAnimatedBorder>
          <BoxWithAnimatedBorder bgClassName="w-full h-full flex justify-center items-center">
            <p className="overflow-visible">
              Nowadays I'm a full-stack developer dedicated to creating modern
              and durable web services and web apps. I have experienced all the
              steps of commercial software, from the concepts to the end of the
              cycle. Also, I study Analisis and Development of Systems at
              Estácio de Sá University to improve my skills and dive even deeper
              into the depths of programming knowledge.
            </p>
          </BoxWithAnimatedBorder>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutContent;
