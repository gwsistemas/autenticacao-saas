/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { memo } from 'react'
import { Image, Typography, ListItem, Loading } from '@/presentation/components'

import { Props } from './types'
import { OrganizationLoading, UserOrganizationListBase } from './styles'

type IconTypes = {
  [x: string]: any
}

const iconTypes: IconTypes = {
  u: 'fa-user-tie',
  c: 'fa-user-circle',
  r: 'fa-handshake'
}

const handleTextNormalize = (text: string): string => text.toLowerCase().trim()

const UserOrganizationList: React.FC<Props> = ({
  organizationsData,
  textSearch,
  organizationType,
  onClickOrganization,
  loading
}: Props) => {
  const rows: React.ReactElement[] = []

  organizationsData.forEach((organization) => {
    const id = Math.floor(Math.random() * 100)
    if (
      !handleTextNormalize(organization.nome_organizacao).includes(
        handleTextNormalize(textSearch)
      )
    ) {
      return
    }

    if (
      organizationType &&
      !organization.tipo_acesso.includes(organizationType)
    ) {
      return
    }

    if (organization.tipo_acesso.length > 1) {
      organization.tipo_acesso.forEach((type) => {
        const localId = Math.floor(Math.random() * 100)
        rows.push(
          <ListItem
            key={localId}
            justifyContent="space-between"
            onClick={(): void =>
              onClickOrganization({ ...organization, tipo_acesso: [type] })
            }
          >
            <Image
              src={organization.organizacao_img_logo}
              alt={organization.nome_organizacao}
            />
            <Typography upperCase>{organization.nome_organizacao}</Typography>
            <i className={`fas ${iconTypes[type]}` || 'fa-user-tie'} />
          </ListItem>
        )
      })
    } else {
      rows.push(
        <ListItem
          key={id}
          justifyContent="space-between"
          onClick={(): void => onClickOrganization(organization)}
        >
          <Image
            src={organization.organizacao_img_logo}
            alt={organization.nome_organizacao}
          />
          <Typography upperCase>{organization.nome_organizacao}</Typography>
          <i
            className={`fas ${
              iconTypes[organization.tipo_acesso[0]] || 'fa-user-tie'
            }`}
          />
        </ListItem>
      )
    }
  })

  if (!rows.length && loading) {
    return (
      <OrganizationLoading>
        <Loading />
      </OrganizationLoading>
    )
  }

  return (
    <UserOrganizationListBase>
      {rows.length ? (
        rows
      ) : (
        <Typography>Nenhuma organização encontrada.</Typography>
      )}
    </UserOrganizationListBase>
  )
}

export default memo(UserOrganizationList)
