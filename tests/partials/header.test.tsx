import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../src/template/partials/Header";
import "../../src/app/internacionalization/i18";

describe("Header Component", () => {
  it("renders the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("My logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the welcome text", () => {
    render(<Header />);
    const welcomeText = screen.getByText(/welcome|Bem-vindo!/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it("renders the theme switch", () => {
    render(<Header />);
    const themeSwitch = screen.getByRole("checkbox");
    expect(themeSwitch).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<Header />);
    const enButton = screen.getByText("en");
    fireEvent.click(enButton);
    const navButtons = ["home", "about", "projects", "contact"];
    navButtons.forEach(text => {
      const button = screen.getByText(text);
      expect(button).toBeInTheDocument();
    });
  });

  // it("opens and closes the drawer", () => {
  //   render(<Header />);
  //   const menuButton = screen.getByLabelText("menu");
  //   fireEvent.click(menuButton);

  //   const drawer = screen.getAllByRole("presentation")[0];
  //   expect(drawer).toBeInTheDocument();

  //   fireEvent.click(drawer);
  //   expect(drawer).not.toBeInTheDocument();
  // });

  it("changes language to pt-BR", () => {
    render(<Header />);
    const ptbrButton = screen.getByText("ptbr");
    fireEvent.click(ptbrButton);
    const welcomeText = screen.getByText(/Bem-vindo/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it("changes language to en", () => {
    render(<Header />);
    const enButton = screen.getByText("en");
    fireEvent.click(enButton);
    const welcomeText = screen.getByText(/welcome/i);
    expect(welcomeText).toBeInTheDocument();
  });
});
