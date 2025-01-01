import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Home } from "./Home";


describe('Home page', () => {
    test("should render home page", () => {
        const { getByTestId } = render(<Home />)

        expect(getByTestId('home')).toBeInTheDocument()
    })
})