import Image from "next/image";
import Header from "../template/partials/Header";
import Overview from "../components/Frames/Overview";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <Header />
      <Overview />
    </main>
  );
}
