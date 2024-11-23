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
    <AppBar position="static" className="bg-primary dark:bg-dark">
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
          <ThemeSwitch />
        </div>

        <div className="flex items-center md:hidden">
          <IconButton
            edge="start"
            className="text-foreground"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <List className="flex">
          {["Home", "About", "Projects", "Contact"].map(text => (
            <Button
              key={text}
              variant="text"
              className="text-neutral-light dark:text-neutral-gray"
            >
              {text}
            </Button>
          ))}
        </List>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-64"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Header;
