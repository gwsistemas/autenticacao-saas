import React, { memo } from 'react'
import { Typography, ListItem, Loading } from '@/presentation/components'

import { Props } from './types'
import { UseSuppliersBase } from './styles'

const handleTextNormalize = (text: string): string => text.toLowerCase().trim()

const SupplierList: React.FC<Props> = ({
  textSearch,
  suppliersData,
  onClickSupplier,
  loading
}: Props) => {
  const rows: React.ReactElement[] = []

  suppliersData.forEach((supplierItem) => {
    if (
      !handleTextNormalize(supplierItem.razao_social).includes(
        handleTextNormalize(textSearch)
      )
    ) {
      return
    }

    rows.push(
      <ListItem
        key={supplierItem.id}
        justifyContent="center"
        onClick={(): void => onClickSupplier(supplierItem)}
      >
        <Typography upperCase>{supplierItem.razao_social}</Typography>
      </ListItem>
    )
  })

  if (loading) {
    return (
      <UseSuppliersBase>
        <Loading />
      </UseSuppliersBase>
    )
  }

  return (
    <UseSuppliersBase>
      {rows.length ? (
        rows
      ) : (
        <Typography>Nenhum fornecedor não encontrado.</Typography>
      )}
    </UseSuppliersBase>
  )
}

export default memo(SupplierList)
