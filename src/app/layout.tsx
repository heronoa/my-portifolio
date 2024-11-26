import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/themeSwitch.css";
import "./styles/emblaCarousel.css";
import MainTemplate from "@/template";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heron Amaral Dev",
  description: "Personal website of Heron Amaral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <MainTemplate>{children}</MainTemplate>
        </body>
      </html>
    </Providers>
  );
}
