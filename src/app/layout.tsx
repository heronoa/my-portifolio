import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/themeSwitch.css";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
