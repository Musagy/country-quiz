import Question from "../components/Question"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { QuestionType } from "../types"

describe("question component tests", () => {
  const mock: QuestionType = {
    q: "¿Que país es este?",
    image: "https://flagcdn.com/w320/pe.png",
    response: "Perú"
  }
  beforeEach(() => {
    render(<Question question={mock} />)
  })

  test("should have a question", async () => {
    await waitFor(() => {
      expect(screen.getByText("¿Que país es este?")).toBeInTheDocument()
    })
  })

  test("should have a imagen",async () => {
    await waitFor(() => {
      expect(screen.getByAltText("imagen clave")).toBeInTheDocument()
    })
  })
})
