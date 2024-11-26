import Overview from "../components/Frames/Overview";
import Projects from "../components/Frames/Projects";
import About from "@/components/Frames/About";
import Contacts from "@/components/Frames/Contacts";

export default function Home() {
  return (
    <>
      <Overview />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}
