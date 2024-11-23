import Image from "next/image";
import Header from "../template/partials/Header";
import Overview from "../components/Frames/Overview";
import Projects from "../components/Frames/Projects";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Overview />
      <Projects />
    </>
  );
}
