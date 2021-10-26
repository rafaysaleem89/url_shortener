import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

const mockFunction = jest.fn();

test("Button press is calling the correct function", () => {
  render(
    <Button onClick={mockFunction}/>
  );
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


