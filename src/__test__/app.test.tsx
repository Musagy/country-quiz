import App from "../App"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"

describe("App test", () => {
  beforeEach(() => {
    render(<App />)
  })
  
  test("should have the title of Country Quiz", () => {
    expect(screen.getByText("Country Quiz")).toBeInTheDocument()
  })
})
