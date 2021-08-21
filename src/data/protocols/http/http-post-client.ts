import { HttpResponse } from './http-response'

export type HttpPostParams<P> = {
  url: string
  body?: P
}

export interface HttpPostClient<P, R> {
  post: (params: HttpPostParams<P>) => Promise<HttpResponse<R>>
}
