import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async post (parmas: HttpPostParams<any>): Promise<void> {
    await axios(parmas.url)
  }
}
