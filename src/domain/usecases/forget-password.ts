import { CommonReturn } from '../models'

export interface ForgetPassword {
  send: (params: ForgetPassword.Params) => Promise<string>
}

export namespace ForgetPassword {
  export type Params = {
    email: string
  }
  export type Model = CommonReturn
}
