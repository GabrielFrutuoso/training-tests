import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChampionScreen } from "./ChampionScreen";

describe("champion page", () => {
  test("should render champion page", () => {
    const { getByTestId } = render(<ChampionScreen />);

    expect(getByTestId("champion")).toBeInTheDocument();
  });


});
