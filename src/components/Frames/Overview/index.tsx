import ThreeTechOrbit from "@/components/UI/ThreeTechOrbit";
import React from "react";

const Overview: React.FC = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      data-testid="overview"
    >
      <div
        className="absolute inset-0 z-10 min-w-screen min-h-screen bg-cover bg-center bg-no-repeat filter blur-lg"
        style={{ backgroundImage: "url('images/me.webp')" }}
      />
      <div className="flex justify-center items-center gap-4 relative z-20">
        <div className="flex-1">
          <h1 className="relative z-20 text-white text-4xl">Heron Amaral</h1>
        </div>
        <div className="flex-1">
          <ThreeTechOrbit />
        </div>
      </div>
    </div>
  );
};

export default Overview;
