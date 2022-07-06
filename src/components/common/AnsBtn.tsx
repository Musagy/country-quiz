import React from "react"

interface btnProps {
  text: string
  onClick: () => void
  display?: "result" | null
  index: number
  className: string
}
const indexVocal = ["A", "B", "C", "D"]

const AnsBtn = ({ text, onClick, display, index, className }: btnProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        display == "result" ? "btn-result" : "btn-game"
      }`}
    >
      <span>{indexVocal[index]}</span>
      <p>{text}</p>
    </button>
  )
}

export default AnsBtn
