import React, { memo } from 'react'
import { Typography, ListItem, Loading } from '@/presentation/components'

import { Props } from './types'

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
        onClick={(): void => onClickSupplier(supplierItem)}
      >
        <Typography upperCase>{supplierItem.razao_social}</Typography>
      </ListItem>
    )
  })

  if (!rows.length && loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {rows.length ? (
        rows
      ) : (
        <Typography>Nenhum fornecedor não encontrado.</Typography>
      )}
    </div>
  )
}

export default memo(SupplierList)
