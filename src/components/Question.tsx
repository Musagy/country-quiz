import { useEffect, useState } from "react"
import { QuestionType } from "../types"

interface Props {
  question: QuestionType
}

const Question = ({ question }: Props) => {
  return (
    <>
      {question.image !== "" && <img src={question.image} alt="imagen clave" />}
      <h2>{question.q}</h2>
    </>
  )
}

export default Question
