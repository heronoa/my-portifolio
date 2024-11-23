import React from "react";
import { render, screen } from "@testing-library/react";
import Overview from "../../src/components/Frames/Overview";

describe("Overview Component", () => {
  test("it should fit the user screen", () => {
    render(<Overview />);
    const overviewElement = screen.getByTestId("overview");
    expect(overviewElement).toHaveStyle("width: 100vw");
    expect(overviewElement).toHaveStyle("height: 100vh");
  });

  test("it should have a call to action to the contact frame", () => {
    render(<Overview />);
    const callToAction = screen.getByText(/contact/i);
    expect(callToAction).toBeInTheDocument();
    expect(callToAction).toHaveAttribute("href", "#contact");
  });

  test("it should have a call to action text", () => {
    render(<Overview />);
    const callToActionText = screen.getByText(/Welcome/i);
    expect(callToActionText).toBeInTheDocument();
  });
});
