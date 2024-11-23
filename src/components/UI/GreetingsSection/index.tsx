import { Button } from "@mui/material";
import RandomTextAnimation from "../Animations/RandomTextAnimation";
import WritingAnimation from "../Animations/WritingAnimation";
import MovableBackgroundColor from "../Animations/MovableBackgroundColor";

const GreetingsSection: React.FC = () => {
  return (
    <div className="p-14 flex flex-col gap-4">
      <RandomTextAnimation text="Hello World!" />
      <p className="relative z-20 text-primary-light text-md">My name is</p>

      <h1 className="relative z-20 text-primary-light text-4xl">
        <MovableBackgroundColor text="Heron Amaral" />
      </h1>
      <p className="relative z-20 text-primary-light text-lg">
        I'm a full stack developer dedicated to create mordern and durable web
        service and web app.
      </p>
      <p className="relative z-20 text-primary-light text-lg">
        Here you will find:
        <WritingAnimation
          className="text-2xl text-dark-accentGold font-bold"
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
      </p>
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
