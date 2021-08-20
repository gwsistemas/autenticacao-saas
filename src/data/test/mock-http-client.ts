import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '../protocols/http'

// This class is a mock to HttpAxiosClient, HttpFetchClient...
export class HttpClientPostSpy implements HttpPostClient {
  url: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
