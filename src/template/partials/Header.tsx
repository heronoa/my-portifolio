"use client";
import React, { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import { ThemeSwitch } from "../../components/UI/ThemeSwitch";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar position="sticky" className="bg-primary dark:bg-dark">
      <Toolbar className="flex justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/realme.jpeg"
            width={32}
            height={32}
            alt="My logo"
            className="mr-2 rounded-full overflow-hidden"
          />
          <Typography variant="h6" className="text-foreground">
            Welcome!
          </Typography>
          <ThemeSwitch className="scale-50 lg:scale-100" />
        </div>

        <div className="flex items-center lg:hidden">
          <IconButton
            edge="start"
            className="text-foreground"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className="text-primary-light" />
          </IconButton>
        </div>

        <List className="lg:flex hidden">
          {["home", "about", "projects", "contact"].map(text => (
            <Button
              key={text}
              variant="text"
              href={`#${text}`}
              className="text-neutral-light dark:text-neutral-gray"
            >
              {text}
            </Button>
          ))}
        </List>
      </Toolbar>
      <Drawer
        anchor="right"
        PaperProps={{ className: "bg-primary dark:bg-dark" }}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className="w-64 "
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {["home", "about", "projects", "contact"].map(text => (
              <ListItem key={text}>
                <Button
                  variant="text"
                  href={`#${text}`}
                  className="text-primary-light"
                >
                  {text}
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Header;
