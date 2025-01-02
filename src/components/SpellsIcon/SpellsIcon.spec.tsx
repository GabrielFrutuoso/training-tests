import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import SpellsIcon from "./SpellsIcon";
import { render } from "@testing-library/react";

describe("Spells Icon", () => {
  const component = (
    <SpellsIcon
      image={
        "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/passive/Aatrox_Passive.png"
      }
      alt={"passive of Aatrox"}
      description={"description of Aatrox passive"}
    />
  );

  test("should render component", () => {
    const { getByTestId } = render(component);

    expect(getByTestId("spellIcon")).toBeInTheDocument();
  });

  test("should render image", () => {
    const { getByAltText } = render(component);

    expect(getByAltText("passive of Aatrox")).toBeInTheDocument();
  });

  test("should render description", () => {
    const { getByText } = render(component);

    expect(getByText("description of Aatrox passive")).toBeInTheDocument();
  });
});
