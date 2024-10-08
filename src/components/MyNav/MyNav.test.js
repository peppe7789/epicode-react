import "@testing-library/jest-dom"
import { fireEvent, render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MyNav from "./MyNav"
import { ThemeProvider } from "../../contexts/ThemeContext"
import { AllTheBooksContextProvider } from "../../contexts/AllTheBooksContext"




describe("Test Mynav component", () => {
    it("sholud render MyNav component correctly", () => {
        const { container, getByTitle, getByText } = render(
            <MemoryRouter>
                <ThemeProvider>
                    <AllTheBooksContextProvider>
                        <MyNav />
                    </AllTheBooksContextProvider>
                </ThemeProvider>
            </MemoryRouter>
        )

        const containerElement = container.querySelector(".container-fluid")
        expect(containerElement).toBeInTheDocument()

        const rowElement = container.querySelector(".row")
        expect(rowElement).toBeInTheDocument()

        const colElement = container.querySelector(".col")
        expect(colElement).toBeInTheDocument()
        // expect(wrapperThird).toHaveAttribute("class", ` p-3 d-flex justify-content-between align-items-centerr ${isDarkMode ? 'bg-dark' : 'bg-danger'}`)

        const divElement = getByTitle("groupLogoLink")
        expect(divElement).toBeInTheDocument()
        expect(divElement).toHaveAttribute("class","d-flex justify-content-center align-items-center gap-3")

        const divSecondElement = getByTitle("groupSearchDark")
        expect(divSecondElement).toBeInTheDocument()
        expect(divSecondElement).toHaveAttribute("class", "d-flex justify-content-center align-items-center gap-2")

        // const buttonDarkMode = getByText("DarkMode")
        // const handleClick = jest.fn()
        // fireEvent.click(screen.getByText("DarkMode"))
        // expect(buttonDarkMode).toBeInTheDocument()
        // expect(handleClick).toHaveBeenCalledTimes(1)
        

        
        







    })
})