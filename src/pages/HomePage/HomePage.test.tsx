import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import HomePage from "./HomePage";
import axiosMock from "axios";
import { APP_ERRORS } from "../../utils/constants";

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

const mockReturnUrl = "https://bitly.com/text";

afterEach(cleanup);

test("Shows error when url empty", () => {
  render(<HomePage />);
  const buttonElement = screen.getByRole("button");
  fireEvent(
    buttonElement,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  const errorElement = screen.getByText(APP_ERRORS.EMPTY_URL);
  expect(errorElement).toBeInTheDocument();
});

test("Shows error when url invalid", async () => {
  render(<HomePage />);
  const inputElement = screen.getByPlaceholderText("Enter Long URL");
  fireEvent.change(inputElement, { target: { value: "abc" } });
  const buttonElement = screen.getByRole("button");
  fireEvent(
    buttonElement,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  const errorElement = screen.getByText(APP_ERRORS.INVALID_URL);
  expect(errorElement).toBeInTheDocument();
});

test("Url fetching workflow working correctly", async () => {
  //@ts-ignore
  axiosMock.post.mockResolvedValueOnce({ data: { link: mockReturnUrl } });

  render(<HomePage />);
  const inputElement = screen.getByPlaceholderText("Enter Long URL");
  fireEvent.change(inputElement, {
    target: { value: "https://www.google.com" },
  });
  const buttonElement = screen.getByRole("button");
  fireEvent(
    buttonElement,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  const textElement = await screen.findByText(mockReturnUrl);
  expect(textElement).toBeInTheDocument();
});

test("Snackbar is shown on url fetch", async () => {
	//@ts-ignore
	axiosMock.post.mockResolvedValueOnce({ data: { link: mockReturnUrl } });
  
	render(<HomePage />);
	const inputElement = screen.getByPlaceholderText("Enter Long URL");
	fireEvent.change(inputElement, {
	  target: { value: "https://www.google.com" },
	});
	const buttonElement = screen.getByRole("button");
	fireEvent(
	  buttonElement,
	  new MouseEvent("click", {
		bubbles: true,
		cancelable: true,
	  })
	);
	const snackBarElement = await screen.findByRole('note');
	expect(snackBarElement).toBeInTheDocument();
  });
