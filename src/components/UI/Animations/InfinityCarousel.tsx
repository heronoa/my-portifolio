import React from "react";

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
      data-sentry-component="InfiniteMovingCards"
      data-sentry-source-file="InfiniteMovingCards.tsx"
    >
      <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll">
        {images.map((item, index) => (
          <li
            key={index}
            className="w-20 max-w-full relative rounded-2xl flex-shrink-0 items-center mr-5"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="lg:w-32 md:w-20 w-16 items-center"
            />
          </li>
        ))}
        {images.map((item, index) => (
          <li
            key={index}
            className="w-20 max-w-full relative rounded-2xl flex-shrink-0 items-center mr-5"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="lg:w-32 md:w-20 w-16 items-center"
            />
          </li>
        ))}
        {images.map((item, index) => (
          <li
            key={index}
            className="w-20 max-w-full relative rounded-2xl flex-shrink-0 items-center mr-5"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="lg:w-32 md:w-20 w-16 items-center"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfinityCarousel;
