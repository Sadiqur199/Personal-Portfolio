import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

test("renders Sadiqur's portfolio name", () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const nameElement = screen.getByText(/SADIQUR RAHMAN/i);
  expect(nameElement).toBeInTheDocument();
});
