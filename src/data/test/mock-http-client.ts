import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '../protocols/http'

// This class is a mock to HttpAxiosClient, HttpFetchClient...
export class HttpClientPostSpy<P, R> implements HttpPostClient<P, R> {
  url: string
  body?: P
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<P>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
