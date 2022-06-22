import { SupplierCustomersList, SupplierCustomer } from '@/domain/models'

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  suppliersData: SupplierCustomersList
  onClickSupplier?: (supplier: SupplierCustomer) => void
  loading?: boolean
}
