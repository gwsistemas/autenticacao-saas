import { mockAccountModel } from '@/domain/test'
import { ForgetPassword } from '@/domain/usecases'

export class ForgetPasswordSpy implements ForgetPassword {
  accout = mockAccountModel()
  params: ForgetPassword.Params
  callsCount = 0
  async send(params: ForgetPassword.Params): Promise<ForgetPassword.Model> {
    this.params = params
    this.callsCount += 1
    return {
      return: ''
    }
  }
}
