import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SearchBook from "./Searchbook"
import { AllTheBooksContextProvider } from "../../../contexts/AllTheBooksContext"


describe("Test single book card component ", () => {
    it("should render single book component correctly ", () => {
        const { getByText, getByPlaceholderText } = render(
            <MemoryRouter>
                <AllTheBooksContextProvider>
                    <SearchBook />
                </AllTheBooksContextProvider>
            </MemoryRouter>
        )

        const inputElement = getByPlaceholderText("Cerca libro")
        expect(inputElement).toBeInTheDocument()

        const buttonElement = getByText("Cerca")
        expect(buttonElement).toBeInTheDocument()
    })
})