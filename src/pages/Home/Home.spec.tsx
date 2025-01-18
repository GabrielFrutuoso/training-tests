import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    );
};

describe('Home page', () => {
    test("should render home page", () => {
        const { getByTestId } = renderWithRouter(<Home />);
        expect(getByTestId('home')).toBeInTheDocument();
    });

    test("should render list of champions", async () => {
        renderWithRouter(<Home />);
        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).toHaveLength(168);
        
    });
});