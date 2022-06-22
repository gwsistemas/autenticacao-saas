import React, { memo } from 'react'
import { Typography, ListItem, Loading } from '@/presentation/components'

import { Props } from './types'
import { UseSuppliersBase } from './styles'

const SupplierList: React.FC<Props> = ({
  suppliersData,
  onClickSupplier,
  loading
}: Props) => {
  if (loading) {
    return (
      <UseSuppliersBase>
        <Loading />
      </UseSuppliersBase>
    )
  }

  return (
    <UseSuppliersBase>
      {suppliersData.length ? (
        suppliersData.map((supplierItem) => (
          <ListItem
            key={supplierItem.id}
            justifyContent="center"
            onClick={(): void => onClickSupplier(supplierItem)}
          >
            <Typography upperCase>{supplierItem.razao_social}</Typography>
          </ListItem>
        ))
      ) : (
        <Typography>Nenhum fornecedor não encontrado.</Typography>
      )}
    </UseSuppliersBase>
  )
}

export default memo(SupplierList)
