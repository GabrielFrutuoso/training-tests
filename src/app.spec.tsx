import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App";

describe("App", () => {
  test("should be rendered on screen", () => {
    const { getByTestId } = render(<App />);;

    expect(getByTestId('app')).toBeInTheDocument()
  });
});
