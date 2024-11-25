import Image from "next/image";
import Header from "../template/partials/Header";
import Overview from "../components/Frames/Overview";
import Projects from "../components/Frames/Projects";
import { Box } from "@mui/material";
import About from "@/components/Frames/About";

export default function Home() {
  return (
    <>
      <Overview />
      <About />
      <Projects />
    </>
  );
}
