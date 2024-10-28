import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ChampionIcon } from "./ChampionIcon";

const component = <ChampionIcon name="Aatrox" icon="https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Aatrox.png" />

describe('champions card', () => {
    test('should render', () => {
        const {getByTestId} = render(component)

        expect(getByTestId('champions card')).toBeInTheDocument()
    })

    test('should render icon', () => {
        const {getByRole} = render(component)

        expect(getByRole('img')).toBeInTheDocument()
    })

    test('should render name', () => {
        const {getByTitle} = render(component)

        expect(getByTitle('icone do Aatrox')).toBeInTheDocument()
    })
})