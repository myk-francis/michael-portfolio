import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import resumePdf from "./assets/Resume.pdf";

afterEach(() => window.history.replaceState(null, "", window.location.pathname));

test("renders hero heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /Michael Francis Mugendi/i
    })
  ).toBeInTheDocument();
});

test("opens the resume and offers the original PDF, then returns to the portfolio", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "View resume" })).toHaveAttribute("href", "#/resume");
  window.history.pushState(null, "", "#/resume");
  fireEvent(window, new HashChangeEvent("hashchange"));

  expect(screen.getByRole("heading", { level: 1, name: /Mike Mugendi/ })).toHaveFocus();
  const download = screen.getByRole("link", { name: /Download resume/ });
  expect(download).toHaveAttribute("href", resumePdf);
  expect(download).toHaveAttribute("download", "Mike-Mugendi-Resume.pdf");

  expect(screen.getByRole("link", { name: /Back to portfolio/ })).toHaveAttribute("href", "#home");
  window.history.pushState(null, "", "#home");
  fireEvent(window, new HashChangeEvent("hashchange"));
  expect(screen.getByRole("heading", { level: 1, name: /Michael Francis Mugendi/ })).toBeInTheDocument();
});

test("loads the resume directly at its download section", () => {
  window.history.replaceState(null, "", "#resume-download");
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: /Mike Mugendi/ })).toBeInTheDocument();
});
