import { Button } from "@mui/material";
import RandomTextAnimation from "../Animations/RandomTextAnimation";
import WritingAnimation from "../Animations/WritingAnimation";

const GreetingsSection: React.FC = () => {
  return (
    <div className="p-14 flex flex-col gap-4">
      <RandomTextAnimation text="Hello World!" />
      <h1 className="relative z-20 text-primary-light text-4xl">
        Welcome to my <span>portifolio!</span>
      </h1>
      <p className="relative z-20 text-primary-light text-lg">
        I'm a full stack developer dedicated to create mordern and durable web
        service and web app.
      </p>
      <div className="relative z-20 text-primary-light text-lg">
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
      </div>
      <div>
        <Button
          className="relative z-20 dark:bg-dark bg-primary"
          href="#contact"
          variant="contained"
        >
          {" "}
          Let's Talk!{" "}
        </Button>
      </div>
    </div>
  );
};
export default GreetingsSection;
