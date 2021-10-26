import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShortenUrlForm from "./ShortenUrlForm";

const mockSubmitFunction = jest.fn();

const mockChangeFunction = jest.fn();

const mockUrl = "https://www.google.com";

const mockError = "Empty Url";

test("Button press is calling the correct function", () => {
  render(
    <ShortenUrlForm
      longUrl={mockUrl}
      onFormSubmit={mockSubmitFunction}
      onLongUrlChange={mockChangeFunction}
    />
  );
  const buttonElement = screen.getByRole("button");
  fireEvent(
    buttonElement,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(mockSubmitFunction).toHaveBeenCalled();
});

test("Text field has the correct prop value and text change is calling the correct function", () => {
	render(
	  <ShortenUrlForm
		longUrl={mockUrl}
		onFormSubmit={mockSubmitFunction}
		onLongUrlChange={mockChangeFunction}
	  />
	);
	const textFieldElement = screen.getByDisplayValue(mockUrl) as HTMLInputElement;
    fireEvent.change(textFieldElement,{target:{value:'www'}})
	expect(mockChangeFunction).toHaveBeenCalled();
});

test("Correct error is being displayed", () => {
	render(
	  <ShortenUrlForm
		longUrl={mockUrl}
		onFormSubmit={mockSubmitFunction}
		onLongUrlChange={mockChangeFunction}
		error={mockError}
	  />
	);
	const errorElement = screen.getByText(mockError)
	expect(errorElement).toBeVisible();
});
  
