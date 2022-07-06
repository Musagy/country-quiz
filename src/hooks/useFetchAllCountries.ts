import { useEffect } from "react"
import { CountryName } from "../types"

const API = "https://restcountries.com/v3.1/all?fields=name"

// type HookReturn = Promise<CountryName[]>

const useFetchAllCountries = (
  setState: React.Dispatch<React.SetStateAction<CountryName[]>>
) => {
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(API)
      const data = await res.json()
      setState(data)
    }

    dataFetch().catch(err => console.error(err))
  }, [])
  // }, [])
}
export default useFetchAllCountries
