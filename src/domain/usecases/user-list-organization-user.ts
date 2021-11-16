import { UserOrganizationListUserModel } from '../models'

export interface UserListOrganizationUser {
  search: (
    params: UserListOrganizationUser.Params
  ) => Promise<UserListOrganizationUser.Model>
}

export namespace UserListOrganizationUser {
  export type Params = {
    id_usuario: number
  }
  export type Model = UserOrganizationListUserModel
}
