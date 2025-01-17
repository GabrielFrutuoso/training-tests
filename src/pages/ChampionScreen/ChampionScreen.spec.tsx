import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChampionScreen } from "./ChampionScreen";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("champion page", () => {
test("should render champion page", () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/?id=Aatrox&skin=0"]}>
      <Routes>
        <Route path="/" element={<ChampionScreen />} />
      </Routes>
    </MemoryRouter>
  );

  expect(getByTestId("champion")).toBeInTheDocument();
});

test("should render Champion name", async () => {
  render(
    <MemoryRouter initialEntries={["/?id=Aatrox&skin=0"]}>
      <Routes>
        <Route path="/" element={<ChampionScreen />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => expect(screen.getByText("Aatrox")).toBeInTheDocument());
});
});
