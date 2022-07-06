import { CountryInfo, CountryName, QuestionType } from "../types"

interface props {
  ArrCountry: CountryName[]
  setQuestion: React.Dispatch<React.SetStateAction<QuestionType>>
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>
}

const API = "https://restcountries.com/v3.1/name/"
const filterRes = "?fields=translations,flags,capital"

const questions: Array<
  (Country: CountryInfo, res: string) => Promise<QuestionType>
> = [
  async (country, res) => {
    // const [data] = country
    return {
      q: "¿A qué país pertenece esta bandera?",
      image: country.flags.png,
      response: res
    }
    // return country
  },
  async (country, res) => {
    return {
      q: `${country.capital[0]} es la capital de`,
      image: "",
      response: res
    }
    // return country
  },
]

const useCreateQuestion = async ({
  ArrCountry,
  setAnswers,
  setQuestion,
}: props) => {
  const countriesLength = ArrCountry.length
  console.log(countriesLength)

  const genRandomNum = () => Math.round(Math.random() * countriesLength)

  if (countriesLength !== 0) {
    const numberRandom = genRandomNum()
    const wrongCountries = [genRandomNum(), genRandomNum(), genRandomNum()]

    const countryRandom = ArrCountry[numberRandom].name.common

    // fetch country data
    const res = await fetch(API + countryRandom + filterRes)
    const [data] = await res.json()
    console.log(data)

    const randomQuestion = Math.round(Math.random() * (questions.length - 1))
    const question = await questions[randomQuestion](data, countryRandom)
    setQuestion(question)

    let answers: string[] = wrongCountries.map(n => {
      return ArrCountry[n].name.common
    })
    const positionCorrectAnswer = Math.round(Math.random() * 3)

    if (positionCorrectAnswer === 3) {
      answers.push(countryRandom)
    } else {
      const overlappingResponse = answers[positionCorrectAnswer]
      answers[positionCorrectAnswer] = countryRandom
      answers.push(overlappingResponse)
    }
    setAnswers(answers)
  }
}
export default useCreateQuestion
