import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChampionIcon } from "./ChampionIcon";

const component = <ChampionIcon name="Aatrox" icon="https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Aatrox.png" />

describe('champions card', () => {
    test('should render', () => {
        render(component)

        expect(screen.getByTestId('champions card')).toBeInTheDocument()
    })

    test('should render icon', () => {
        render(component)

        expect(screen.getByRole('img')).toBeInTheDocument()
    })

    test('should render name', () => {
        render(component)

        expect(screen.getByTitle('Aatrox')).toBeInTheDocument()
    })

    
})