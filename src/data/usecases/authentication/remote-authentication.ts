import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { Authentication } from '@/domain/usercases'

export class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient) {}
  async auth (params: Authentication.Params): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}
