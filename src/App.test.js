import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders user input box", () => {
  const { getByLabelText } = render(<App />);
  const linkElement = getByLabelText(/User/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders password input box", () => {
  const { getByLabelText } = render(<App />);
  const linkElement = getByLabelText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
