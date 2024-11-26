import { Tooltip } from "@mui/material";
import React from "react";
import Image from "next/image";
import Zoom from "@mui/material/Zoom";
interface Props {
  images: { src: string; alt: string }[];
  reverse?: boolean;
}

const InfinityCarousel: React.FC<Props> = ({ images, reverse }: Props) => {
  return (
    <div
      className="scroller relative max-w-screen overflow-hidden [mask-image:linear-gradient(to right,transparent,white_20%,white_80%,transparent)] z-[999]"
      style={
        {
          "--animation-direction": reverse ? "reverse" : "normal",
          "--animation-duration": "20s",
        } as React.CSSProperties
      }
    >
      <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll">
        {Array(3)
          .fill(images)
          .flat()
          .map((item, index) => (
            <li
              key={index}
              className="w-20 max-w-full relative rounded-2xl flex-shrink-0 items-center mr-5"
            >
              <Tooltip
                title={item.alt}
                slots={{
                  transition: Zoom,
                }}
                arrow
                followCursor
                placement="top"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={80}
                  height={80}
                  className="lg:w-32 md:w-20 w-16 items-center grayscale hover:grayscale-0 transition-all duration-300"
                />
              </Tooltip>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InfinityCarousel;
