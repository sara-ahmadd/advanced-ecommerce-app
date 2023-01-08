import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  let inputNode = screen.getByText(/Easy Shopping/gi);
  expect(inputNode).toBeInTheDocument();
});
