import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AllTheBooksContextProvider } from "../../contexts/AllTheBooksContext"
import AllTheBooks from "./AllTheBooks"

describe("Test AllTheBooks component", () => {
    it("should render all book card correctly ", () => {
        const { container } = render(
            <MemoryRouter>
                <AllTheBooksContextProvider>
                    <AllTheBooks/>
                </AllTheBooksContextProvider>
            </MemoryRouter>
        )

        const containerElement = container.querySelector(".container")
        expect(containerElement).toBeInTheDocument()

        const rowElement = container.querySelector(".row")
        expect(rowElement).toBeInTheDocument()

        const colElements = container.querySelectorAll(".col-md-3")
        expect(colElements).toHaveLength(20)

        colElements.forEach(colElement => {
            expect(colElement).toBeInTheDocument()
        })
    })
})