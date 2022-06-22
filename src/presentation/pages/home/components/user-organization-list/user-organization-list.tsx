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

const UserOrganizationList: React.FC<Props> = ({
  organizationsData,
  onClickOrganization,
  loading
}: Props) => {
  if (!organizationsData.length && loading) {
    return (
      <OrganizationLoading>
        <Loading />
      </OrganizationLoading>
    )
  }

  return (
    <UserOrganizationListBase>
      {organizationsData.length ? (
        organizationsData.map((organization, index) => (
          <ListItem
            key={index}
            justifyContent="space-between"
            onClick={(): void =>
              onClickOrganization({
                ...organization,
                tipo_acesso: [organization.type]
              })
            }
          >
            <Image
              src={organization.organizacao_img_logo}
              alt={organization.nome_organizacao}
            />
            <Typography upperCase>{organization.nome_organizacao}</Typography>
            <i
              className={`fas ${iconTypes[organization.type]}` || 'fa-user-tie'}
            />
          </ListItem>
        ))
      ) : (
        <Typography>Nenhuma organização encontrada.</Typography>
      )}
    </UserOrganizationListBase>
  )
}

export default memo(UserOrganizationList)
