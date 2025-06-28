import { render, screen } from "@testing-library/react";
import App from "./App";

// how to check element roles:
// use logRoles(<App />) to check all roles inside the App component
// import { logRoles } from "@testing-library/dom"
// check more details at https://testing-library.com/docs/dom-testing-library/api-debugging/#logroles

test("Button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});
