
import { render, screen } from "@testing-library/react";
import TodoFooter from "./TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MainTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

it("should be render the correct amount of incomplete tasks", () => {
    render(<MainTodoFooter numberOfIncompleteTasks={5} />)
    const paragraphElement = screen.getByText(/5 tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
})

it("should render 'task'when th number of incomplete tasks is one", () => {
    render(<MainTodoFooter numberOfIncompleteTasks={1} />)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeInTheDocument()
})

it("should render 'task'when th number of incomplete tasks is one", () => {
    render(<MainTodoFooter numberOfIncompleteTasks={1} />)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeVisible()
})

it("should render 'task'when th number of incomplete tasks is one", () => {
    render(<MainTodoFooter numberOfIncompleteTasks={1} />)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toContainHTML("p")
})

it("should render 'task'when th number of incomplete tasks is one", () => {
    render(<MainTodoFooter numberOfIncompleteTasks={1} />)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toHaveTextContent("1 task left")
})
