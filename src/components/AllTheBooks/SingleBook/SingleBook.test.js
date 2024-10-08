import "@testing-library/jest-dom"
import SingleBook from "./SingleBook"
import { MemoryRouter } from "react-router-dom"
import { AllTheBooksContextProvider } from "../../../contexts/AllTheBooksContext"
import { render } from "@testing-library/react"

describe(" Test single book component", () => {
    it("should render single book component with props", () => {
        const { getByRole,getByText } = render(
            <MemoryRouter>
                <AllTheBooksContextProvider>
                    <SingleBook
                        title="abc"
                        img="http://ciao.it"
                        category="category"
                        price="223"
                    />
                </AllTheBooksContextProvider>
            </MemoryRouter>
        )

        const imgElemnt = getByRole("img")
        expect(imgElemnt).toBeInTheDocument()

        const titleElement = getByText("abc")
        expect(titleElement).toBeInTheDocument()

        const categoryElement = getByText("category")
        expect(categoryElement).toBeInTheDocument()

        const priceElement = getByText("223")
        expect(priceElement).toBeInTheDocument()
    })
})