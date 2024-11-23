import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../src/template/partials/Header";

describe("Header Component", () => {
  it("renders the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("My logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the welcome text", () => {
    render(<Header />);
    const welcomeText = screen.getByText("Welcome!");
    expect(welcomeText).toBeInTheDocument();
  });

  it("renders the theme switch", () => {
    render(<Header />);
    const themeSwitch = screen.getByRole("checkbox");
    expect(themeSwitch).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<Header />);
    const navButtons = ["Home", "About", "Projects", "Contact"];
    navButtons.forEach(text => {
      const button = screen.getByText(text);
      expect(button).toBeInTheDocument();
    });
  });

  it("opens and closes the drawer", () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("menu");
    fireEvent.click(menuButton);

    const drawer = screen.getByRole("presentation");
    expect(drawer).toBeInTheDocument();

    fireEvent.click(drawer);
    expect(drawer).not.toBeInTheDocument();
  });
});