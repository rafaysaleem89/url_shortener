import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UrlDisplay from "./UrlDisplay";

const mockFunction = jest.fn();

const mockUrl = "https://www.bitly.com/abc";


test("Correct url is being displayed", () => {
  render(<UrlDisplay shortUrl={mockUrl} onCopyClick={mockFunction} />);
  const textElement = screen.getByText(mockUrl);
  expect(textElement).toBeVisible();
});

test("Button press is calling the correct function", () => {
  render(<UrlDisplay shortUrl={mockUrl} onCopyClick={mockFunction} />);
  const buttonElement = screen.getByRole("button");
  fireEvent(
    buttonElement,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(mockFunction).toHaveBeenCalled();
});
