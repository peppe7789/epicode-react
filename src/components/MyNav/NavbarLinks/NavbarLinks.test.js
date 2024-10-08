import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import NavbarLinks from "./NavbarLinks"

describe("Test navbar links component", () => {
    it("should render ul and links correctly", () => {
        const { getByRole, getAllByRole } = render(
            <NavbarLinks/>
        )

        const ulElement = getByRole("list")
        expect(ulElement).toBeInTheDocument()
        
        const links = getAllByRole("link")
        expect(links).toHaveLength(3)
        expect(links[0]).toHaveAttribute("href", "#")
        expect(links[1]).toHaveAttribute("href", "#")
        expect(links[2]).toHaveAttribute("href", "#")

        links.forEach(link => {
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute("class","text-decoration-none text-white")
        })
        


    })
})

