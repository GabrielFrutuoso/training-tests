import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChampionIcon } from "./ChampionIcon";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ChampionScreen } from "../../pages/ChampionScreen/ChampionScreen";

const component = (
  <MemoryRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ChampionIcon
            id="Aatrox"
            name="Aatrox"
            icon="https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Aatrox.png"
          />
        }
      />
      <Route path="/ChampionScreen" element={<ChampionScreen />} />
    </Routes>
  </MemoryRouter>
);

describe("champions card", () => {
  test("should render", () => {
    render(component);

    expect(screen.getByTestId("champions card")).toBeInTheDocument();
  });

  test("should render icon", () => {
    render(component);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("should render name", () => {
    render(component);

    expect(screen.getByTitle("Aatrox")).toBeInTheDocument();
  });

  test("should redirect to champion screen", () => {
    render(component);
    fireEvent.click(screen.getByText("Aatrox"));

    expect(screen.getByTestId("champion")).toBeInTheDocument();
  });

});
