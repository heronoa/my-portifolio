"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Drawer, List, ListItem, Button } from "@mui/material";

const MobileMenu: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  return (
    <div className="flex items-center lg:hidden absolute right-3 top-3">
      <IconButton
        edge="start"
        className="text-foreground"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon className="!text-primary-light" />
      </IconButton>
      <Drawer
        anchor="right"
        PaperProps={{ className: "!bg-primary dark:!bg-dark" }}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className="w-64"
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
                  className="!text-primary-light"
                >
                  {text}
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
