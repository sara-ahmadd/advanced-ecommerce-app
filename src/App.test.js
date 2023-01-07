import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const inputNode = screen.getByText(/Easy Shopping/g);
  expect(inputNode).toBeInTheDocument();
});
