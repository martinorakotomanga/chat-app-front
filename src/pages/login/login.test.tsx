import { render } from "../../test-utils";
import Login from "./login";
import "@testing-library/jest-dom";

test("Login page rendered successfully", () => {
  const { getByRole, getByText } = render(<Login />);

  expect(getByText("Se connecter")).toHaveTextContent("Se connecter");
});
