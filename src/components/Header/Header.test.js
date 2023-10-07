
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("should be render the text and passed the title",() => {
    render(<Header title="TODO"/>)
    const headingElement = screen.getByText(/TODO/i)
    expect(headingElement).toBeInTheDocument()
})

// for single element
it("should redner same text passed into title prop",() => {
    render(<Header title="TODO"/>)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
})

// it("should redner same text passed into title prop",() => {
//     render(<Header title="TODO"/>)
//     const headingElement = screen.getByRole("heading",{name:"TODO"})
//     expect(headingElement).toBeInTheDocument()
// })

// it("should redner same text passed into title prop",() => {
//     render(<Header title="TODO"/>)
//     const headingElement = screen.getByTitle("Header")
//     expect(headingElement).toBeInTheDocument()
// })

// it("should redner same text passed into ID",() => {
//     render(<Header title="TODO"/>)
//     const headingElement = screen.getByTestId("1")
//     expect(headingElement).toBeInTheDocument()
// })

// // find by
// it("should be render the text and passed the title",async() => {
//     render(<Header title="TODO"/>)
//     const headingElement = await screen.findByText(/TODO/i)
//     expect(headingElement).toBeInTheDocument()
// })


// // query by for dynamic
// it("should be render the text and passed the title",() => {
//     render(<Header title="TODO"/>)
//     const headingElement =  screen.queryByText(/ssssss/i)
//     expect(headingElement).not.toBeInTheDocument()
// })

// it("should be render the text and passed the title",() => {
//     render(<Header title="TODO"/>)
//     const headingElements =  screen.getAllByRole("heading")
//     expect(headingElements.length).toBe(2)
// })

