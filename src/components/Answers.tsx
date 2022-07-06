import { Dispatch, SetStateAction, useState } from "react"
import AnsBtn from "./common/AnsBtn"

interface Props {
  answersArray: string[]
  response: string
  correctState: [number, Dispatch<SetStateAction<number>>]
  generateQuestion: (pass?: boolean) => void
}
const Answers = ({
  answersArray,
  response,
  correctState,
  generateQuestion,
}: Props) => {
  const [didAnswer, setDidAnswer] = useState("")
  const classDef = ["", "", "", ""]
  const [btnClass, setBtnClass] = useState(classDef)

  const handlerBtn = (answer: string, index: number) => {
    if (!didAnswer) {
      setDidAnswer(answer)
      let newClasses = [...classDef]
      newClasses[index] = "btn-incorrect"
      setBtnClass(newClasses)
    }
  }
  const handlerNextQuestion = () => {
    if (didAnswer === response) {
      correctState[1](correctState[0]+1)
      generateQuestion()
      setDidAnswer("")
    } else {
      generateQuestion(false)
    }
    setBtnClass(classDef)
  }

  return (
    <>
      <section>
        {answersArray.map((a, i) => {
          return (
            <AnsBtn
              key={i}
              onClick={() => handlerBtn(a, i)}
              text={a}
              index={i}
              className={
                !!didAnswer && response == a ? "btn-correct" : btnClass[i]
              }
            />
          )
        })}
        <div className={didAnswer ? "didAnswer_yes" : "didAnswer_no"} />
      </section>
      {didAnswer && (
        <button className="btn-next" onClick={handlerNextQuestion}>
          Siguiente
        </button>
      )}
    </>
  )
}

export default Answers
