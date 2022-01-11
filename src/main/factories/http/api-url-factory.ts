// console.log(process.env.ESTAGIO)

export const makeApiUrl = (path: string): string => {
  return `https://api.gwsistemas.com.br/api-gwsistemas-hom${path}`
}
