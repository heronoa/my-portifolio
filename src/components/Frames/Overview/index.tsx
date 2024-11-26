import WavyDivider from "@/components/UI/Divider/WavyDivider";
import GreetingsSection from "@/components/UI/GreetingsSection";
import ThreeTechOrbit from "@/components/UI/ThreeTechOrbit";
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
        <div className="lg:flex-1 absolute lg:static -z-20 lg:z-0">
          <ThreeTechOrbit />
        </div>
      </div>

      <WavyDivider />
    </div>
  );
};

export default Overview;
