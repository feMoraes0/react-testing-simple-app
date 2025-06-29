import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import kebabCaseToTileCase from "./helper";

// how to check element roles:
// use logRoles(<App />) to check all roles inside the App component
// import { logRoles } from "@testing-library/dom"
// check more details at https://testing-library.com/docs/dom-testing-library/api-debugging/#logroles

test("Button click flow", () => {
  // mount the component
  render(<App />);
  // get the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  // initial colour assertion
  expect(buttonElement).toHaveClass("medium-violet-red");
  // button click
  fireEvent.click(buttonElement);
  // text change assertion
  expect(buttonElement).toHaveTextContent(/red/i);
  // colour change assertion
  expect(buttonElement).toHaveClass("midnight-blue");
});

test("checkbox flow", () => {
  render(<App />);
  // get the elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });
  // initial state
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  // ckeckbox first click - disable
  fireEvent.click(checkboxElement);
  // validate state after the click
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
  // checkbox second click - enable
  fireEvent.click(checkboxElement);
  // validate state after the click
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});

test("interact and disable flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  // interacting with the button
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("midnight-blue");
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(checkboxElement).not.toBeChecked();
  // interacting with the checkbox
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("gray");
  expect(checkboxElement).toBeChecked();
  // interaction with the checkbox again
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("midnight-blue");
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(checkboxElement).not.toBeChecked();
});

describe("Kebab case to Tile Case helper", () => {
  test("entry with no dash, single word parameter", () => {
    expect(kebabCaseToTileCase("red")).toBe("Red");
  });

  test("entry with one dash, two words parameter", () => {
    expect(kebabCaseToTileCase("midnight-blue")).toBe("Midnight Blue");
  });

  test("entry with multi dashes, multi words parameter", () => {
    expect(kebabCaseToTileCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
