"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useAutoplay } from "./embla/EmblaCarouselAutoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/EmblaCarouselArrowButtons";

type PropType = {
  slides: {
    title: string;
    description?: string;
    tech?: string[];
    img?: string;
    video?: string;
    url?: string;
  }[];
  className?: string;
  options?: EmblaOptionsType;
};

const InteractableCarousel: React.FC<PropType> = props => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  const [positions, setPositions] = useState<React.CSSProperties[][]>([]);

  useEffect(() => {
    // Generate random positions for each item in the array

    function handleRandomness() {
      const random = Math.ceil(Math.random() * 3);

      const bigBall = [
        {
          inset: "-24px auto auto -24px",
        },
        {
          inset: "-24px -24px auto auto",
        },
        {
          inset: "auto -24px auto -24px",
        },
        {
          inset: "auto auto -24px -24px",
        },
      ][random];

      const smallBall1 = [
        {
          inset: "-4px auto auto -4px",
        },
        {
          inset: "-4px -4px auto auto",
        },
        {
          inset: "auto -4px auto -4px",
        },
        {
          inset: "auto auto -4px -4px",
        },
      ][random];

      const smallBall2 = [
        {
          inset: "-4px auto auto 0",
        },
        {
          inset: "-4px 0 auto auto",
        },
        {
          inset: "auto -4px auto -0",
        },
        {
          inset: "auto auto -4px 0",
        },
      ][random];

      const randomPositions = slides.map(() => [
        bigBall,
        smallBall1,
        smallBall2,
      ]);

      setPositions(randomPositions);
    }

    handleRandomness();
  }, [slides]);

  if (!Array.isArray(positions) || positions.length < 1) {
    // Render nothing until positions are generated on the client side
    return null;
  }

  return (
    <div className={`embla ${props.className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(index => {
            return (
              <div
                className="embla__slide relative !basis-[80%] cursor-pointer sm:!basis-1/2 md:!basis-3/4 lg:!basis-1/3"
                key={index.title}
              >
                <Link
                  href={index?.url || ""}
                  passHref
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    animate={{ scale: [0.8, 1] }}
                    onMouseMove={e => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left - rect.width / 2;
                      const y = e.clientY - rect.top - rect.height / 2;
                      e.currentTarget.style.transform = `rotateY(${-x / 10}deg) rotateX(${-y / 10}deg)`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform =
                        "rotateY(0deg) rotateX(0deg)";
                    }}
                  >
                    <div className="embla__slide__number mb-12 mt-12 shadow-2xl justify-between  text-base flex flex-col p-6 dark:text-primary-light text-dark">
                      {index?.img && (
                        <div className="relative">
                          <div className="absolute inset-0 -z-10">
                            <div
                              className={`bg-accent-green dark:bg-dark-accentGreen rounded-full absolute top-4  h-16 w-16 blur-md `}
                              style={
                                positions[slides.indexOf(index)][0] || {
                                  visibility: "hidden",
                                }
                              }
                            />
                            <div
                              className={`bg-accent-gold dark:bg-dark-accentGold rounded-full absolute h-12 w-12 blur-md `}
                              style={
                                positions[slides.indexOf(index)][0] || {
                                  visibility: "hidden",
                                }
                              }
                            />
                            <div
                              className={`bg-dark-accentGold dark:bg-accent-gold rounded-full absolute h-12 w-12 blur-md `}
                              style={
                                positions[slides.indexOf(index)][0] || {
                                  visibility: "hidden",
                                }
                              }
                            />
                          </div>
                          <Image
                            src={index.img}
                            width={295}
                            height={145}
                            alt={`${index.title} image`}
                          />
                        </div>
                      )}
                      <div className="h-[50%] w-full">
                        <h2 className="text-xl text-left ">{index.title}</h2>
                        <p className="text-base text-dark-gray dark:text-dark">
                          {index.description}
                        </p>
                      </div>
                      <div>
                        Click To Open <OpenInNewIcon />
                      </div>
                      <div>
                        {index.tech && (
                          <div className="flex relative gap-2 mt-2">
                            {index.tech.map(tech => (
                              <Image
                                key={tech}
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
                                width={30}
                                height={30}
                                alt={tech}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls mt-0 lg:mt-5">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractableCarousel;
