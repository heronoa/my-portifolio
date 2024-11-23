import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div>
    <Header />
    <main className="flex min-h-screen min-w-screen overflow-hidden flex-col items-center justify-between">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainTemplate;
