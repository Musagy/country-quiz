import { useEffect, useState } from "react"
import Quest from "./components/Question"
import Answers from "./components/Answers"
import { CountryName, QuestionType } from "./types"
import useFetchAllCountries from "./hooks/useFetchAllCountries"
import useCreateQuestion from "./hooks/useCreateQuestion"
import imageGameOver from "./assets/image_game-over.svg"
import imageQuestion from "./assets/image_question.svg"

function App() {
  const [question, setQuestion] = useState<QuestionType>({
    q: "",
    image: "",
    response: "",
  })
  const [answers, setAnswers] = useState<string[]>([])
  const [counties, setCounties] = useState<CountryName[]>([])
  const [correct, setCorrect] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  useFetchAllCountries(setCounties)

  const generateQuestion = () => {
    useCreateQuestion({
      ArrCountry: counties,
      setQuestion,
      setAnswers,
    })
  }
  const nextQuestion = (pass = true) => {
    if (pass) {
      generateQuestion()
    } else {
      generateQuestion()
      setGameOver(true)
    }
  }
  const handlerPlayAgain = () => {
    setGameOver(false)
    setCorrect(0)
  }
  useEffect(() => {
    generateQuestion()
  }, [counties])

  return (
    <main>
      <h1>Country Quiz</h1>
      <div className={"card" + (gameOver ? " card_game-over" : "")}>
        {!gameOver ? (
          <>
            <Quest question={question} />
            <Answers
              answersArray={answers}
              response={question.response}
              correctState={[correct, setCorrect]}
              generateQuestion={nextQuestion}
            />
            <img
              src={imageQuestion}
              alt="imagen question"
              className="img-question"
            />
          </>
        ) : (
          <>
            <img
              src={imageGameOver}
              alt="image game over"
              className="img-game-over"
            />
            <h2 className="result-title">Resultados</h2>
            <p className="result-par">
              Tuviste <span>{correct}</span> respuestas correctas
            </p>
            <button className="btn_play-again" onClick={handlerPlayAgain}>
              Jugar de nuevo
            </button>
          </>
        )}
      </div>
      <footer>created by <span>Musagy</span> - devChallenges.io</footer>
    </main>
  )
}

export default App
