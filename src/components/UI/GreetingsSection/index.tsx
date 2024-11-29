import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { Button } from "@mui/material";
import RandomTextAnimation from "../Animations/RandomTextAnimation";
import WritingAnimation from "../Animations/WritingAnimation";
import MovableBackgroundColor from "../Animations/MovableBackgroundColor";

const GreetingsSection: React.FC = () => {
  return (
    <div className="p-14 flex flex-col gap-4 relative mt-12 lg:mt-0 lg:ml-12 max-w-[90vw] h-[70vh] lg:h-auto">
      <div className="absolute inset-0 -z-10 bg-black/70 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-black/30" />
      <RandomTextAnimation text="Hello World!" />
      <p className="relative z-20 text-primary-light text-md">My name is</p>

      <h1 className="relative z-20 text-primary-light text-4xl">
        <MovableBackgroundColor text="Heron Amaral" />
      </h1>
      <span className="flex justify-center items-center  lg:justify-start lg:items-start gap-3">
        <Link href="https://github.com/heronoa">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/heron-amaral-49a9a1179/">
          <LinkedInIcon />
        </Link>
        <Link href="mailto:heron.amaral@gmail.com">
          <EmailIcon />
        </Link>
      </span>
      <p className="relative z-20 lg:text-xl font-black bg-clip-text text-transparent animate-shimmer bg-[linear-gradient(110deg,#a9b4bd,45%,#EAF2F8,55%,#a9b4bd)] bg-[length:200%_100%]">
        I'm a full stack developer dedicated to create mordern and durable web
        service and web app.
      </p>
      <div className="relative z-20 text-primary-light text-lg flex justify-center items-center lg:justify-start lg:items-start flex-col">
        Here you will find:
        <WritingAnimation
          className="text-2xl text-dark-accentGold font-bold text-center lg:text-left"
          texts={[
            "Compromisse",
            "Dedication",
            "Quality",
            "Innovation",
            "Creativity",
            "Passion",
            "Excellence",
          ]}
        />
      </div>
      <div>
        <Button
          className="inline-flex h-12 font-bold animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#F1C40F,45%,#F39C12,55%,#F1C40F)] dark:bg-[linear-gradient(110deg,#F39C12,45%,#F1C40F,55%,#F39C12)] bg-[length:200%_100%] px-6 text-dark-light transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
          href="#contact"
          variant="contained"
        >
          Let's Talk!
        </Button>
      </div>
    </div>
  );
};
export default GreetingsSection;
