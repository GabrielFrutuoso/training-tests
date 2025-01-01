import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChampionScreen } from "./ChampionScreen";

describe("champion page", () => {
  test("should render champion page", () => {
    const { getByTestId } = render(<ChampionScreen />);

    expect(getByTestId("champion")).toBeInTheDocument();
  });

  test("should render champion splash art", async () => {
    const searchParams = new URLSearchParams("?id=Aatrox&skin=2");
    window.history.pushState({}, "", `?${searchParams.toString()}`);

    const { getByAltText } = render(<ChampionScreen />);
    const splashArt = getByAltText("splash art of Aatrox");
    expect(splashArt).toHaveAttribute(
      "src",
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg"
    );
  });

  test("should render champion name and title", async () => { 
    const searchParams = new URLSearchParams("?id=Aatrox&skin=0");
    window.history.pushState({}, "", `?${searchParams.toString()}`);

    const { getByText } = render(<ChampionScreen />);
    waitFor(() => expect(getByText("Aatrox")).toBeInTheDocument());

  });

});
