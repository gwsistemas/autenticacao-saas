export enum HttpStatusCode {
  noContent = 204,
  unauthorized = 400,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
