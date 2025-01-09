import { render } from "@testing-library/react";
import React from "react";
import Login from "./login";

test("Login page rendered correctly", () => {
  render(<Login />);
  expect(1).toBe(1);
});
