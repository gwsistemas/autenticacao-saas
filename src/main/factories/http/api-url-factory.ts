// console.log(process.env.ESTAGIO)
// console.log(process.env.API_URL)

export const makeApiUrl = (path: string): string => {
  return `${process.env.API_URL}${path}`
}
