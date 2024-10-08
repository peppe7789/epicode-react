import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import NavLogo from "./NavLogo"


describe("Test nav logo", () => {
    it("should render logo correctly", () => {
        const { container, getByRole } = render(
            <MemoryRouter>
                <NavLogo/>
            </MemoryRouter>
        )

        const wrapper = container.querySelector(".sizeCustom")
        expect(wrapper).toBeInTheDocument()
        
        const linkElement = getByRole("link")
        expect(linkElement).toHaveAttribute("href", "/")
        expect(linkElement).toBeInTheDocument()

        const imgElement = getByRole("img")
        expect(imgElement).toHaveAttribute("alt", "")
        expect(imgElement).toBeInTheDocument()

    })
})


