import "@testing-library/jest-dom"
import BookCard from "../BookCard/BookCard"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"


describe("Test book card component", () => {
    it("should render Book card component with props", () => {
        const { getByRole,getByText } = render(
            <MemoryRouter>
                <BookCard
                asin="123"
                title="abc"
                img="http://ciao.it"
                category="category"
                price="223"            
            />
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
    
    it("should render buttons with on click props", () => {
        const { getByRole,getByText } = render(
            <MemoryRouter>
                <BookCard
                asin="123"
                title="abc"
                img="http://ciao.it"
                category="category"
                price="223"            
            />
            </MemoryRouter>
        )
        
        
        const buttonFirst = getByText("Dettagli")
        expect(buttonFirst).toBeInTheDocument()

        const buttonSecondary = getByText("Commenti")
        expect(buttonSecondary).toBeInTheDocument()
    })
})