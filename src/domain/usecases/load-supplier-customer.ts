import { SupplierCustomersList } from '../models/supplier-customer'

export interface LoadSupplierCustomers {
  load: (
    params: LoadSupplierCustomers.Params
  ) => Promise<LoadSupplierCustomers.Model>
}

export namespace LoadSupplierCustomers {
  export type Params = {
    organizacao_id: number
  }
  export type Model = SupplierCustomersList
}
