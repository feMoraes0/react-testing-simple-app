import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

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
  expect(buttonElement).toHaveClass("red");
  // button click
  fireEvent.click(buttonElement);
  // text change assertion
  expect(buttonElement).toHaveTextContent(/red/i);
  // colour change assertion
  expect(buttonElement).toHaveClass("blue");
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
