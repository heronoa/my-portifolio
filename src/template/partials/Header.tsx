import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { List, Button } from "@mui/material";
import { ThemeSwitch } from "../../components/UI/ThemeSwitch";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const t = useTranslations();

  return (
    <AppBar position="sticky" className="bg-primary dark:bg-dark relative">
      <Toolbar className="flex justify-between">
        <div className="flex items-center lg:gap-4">
          <Image
            src="/images/realme.jpeg"
            width={32}
            height={32}
            alt="My logo"
            className="mr-2 rounded-full overflow-hidden"
          />
          <ThemeSwitch className="scale-50 lg:scale-100 -mx-[10px]" />
        </div>

        <List className="lg:flex hidden">
          {["home", "about", "projects", "contact"].map(text => (
            <Button
              key={text}
              variant="text"
              href={"#" + text}
              className="text-neutral-light dark:text-neutral-gray"
            >
              {text}
            </Button>
          ))}
        </List>
      </Toolbar>
      <MobileMenu />
    </AppBar>
  );
};

export default Header;
