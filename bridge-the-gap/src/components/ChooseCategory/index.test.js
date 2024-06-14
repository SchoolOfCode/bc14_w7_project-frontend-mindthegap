import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import ChooseCategory from "./";
import { BrowserRouter } from "react-router-dom";

// check the page renders an image with alt text 'Coding'
test("renders Coding image", async () => {
  render(<ChooseCategory />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  //check the page renders an image with alt text 'Coding'
  expect(screen.getByAltText(/Coding/i)).toBeInTheDocument();
});
