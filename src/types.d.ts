export interface QuestionType {
  q: string
  image?: string
  response: string
}
export interface CountryName {
  name: {
    common
  }
}
export interface CountryInfo {
  capital: string[]
  flags: {
    png: string
    svg: string
  }
  translations: {
    spa: {
      common: string
    }
  }
}
