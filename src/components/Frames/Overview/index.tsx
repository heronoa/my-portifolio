import GreetingsSection from "@/components/UI/GreetingsSection";
import ThreeTechOrbit from "@/components/UI/ThreeTechOrbit";
import { Box } from "@mui/material";
import React from "react";

const Overview: React.FC = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      data-testid="overview"
      id="home"
    >
      <div
        className="absolute inset-0 z-10 min-w-screen min-h-screen bg-cover bg-center bg-no-repeat filter blur-lg"
        style={{ backgroundImage: "url('images/me.webp')" }}
      />
      <div className="flex justify-center flex-col lg:flex-row items-center gap-4 relative z-20 text-center lg:text-left">
        <div className="lg:flex-1">
          <GreetingsSection />
        </div>
        <div className="lg:flex-1">
          <ThreeTechOrbit />
        </div>
      </div>

      <Box className="w-full overflow-hidden mb-[-15px] lg:mb-[-50px] absolute bottom-0 z-[15] leading-0">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="fill-primary dark:fill-dark"
            d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,144C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </Box>
    </div>
  );
};

export default Overview;
