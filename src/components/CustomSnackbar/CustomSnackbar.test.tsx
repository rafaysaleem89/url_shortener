import { render, screen } from "@testing-library/react";
import CustomSnackbar from "./CustomSnackbar";

const mockFunction = jest.fn();

const mockText = "Copied";

test("Snackbar is visible on Open true", () => {
  render(
    <CustomSnackbar
      snackbarOpen
      onSnackbarClose={mockFunction}
      duration={4000}
      severity="info"
      text={mockText}
    />
  );
  const snackBarElement = screen.queryByRole("note");
  expect(snackBarElement).not.toBeNull();
  expect(snackBarElement).toBeInTheDocument();
  expect(snackBarElement).toBeVisible();
});


test("Snackbar is not visible on Open false", () => {
  render(
    <CustomSnackbar
      snackbarOpen={false}
      onSnackbarClose={mockFunction}
      duration={4000}
      severity="info"
      text={mockText}
    />
  );
  const snackBarElement = screen.queryByRole("note");
  expect(snackBarElement).toBeNull();
});

test("Correct text is being displayed", () => {
  render(
    <CustomSnackbar
      snackbarOpen
      onSnackbarClose={mockFunction}
      duration={4000}
      severity="info"
      text={mockText}
    />
  );
  const textElement = screen.getByText(mockText);
  expect(textElement).toBeInTheDocument()
});
