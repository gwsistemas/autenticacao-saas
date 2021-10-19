import { mockAccountModel } from '@/domain/test'
import { Authentication } from '@/domain/usecases'

export class AuthenticationSpy implements Authentication {
  accout = mockAccountModel()
  params: Authentication.Params
  callsCount = 0
  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params
    this.callsCount += 1
    return this.accout
  }
}