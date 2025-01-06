import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChampionScreen } from "./ChampionScreen";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("champion page", () => {
  test("should render champion page", () => {
    const { getByTestId } = render(<MemoryRouter><Routes><Route path="/" element={<ChampionScreen />}/> </Routes></MemoryRouter>);

    expect(getByTestId("champion")).toBeInTheDocument();
  });


});
