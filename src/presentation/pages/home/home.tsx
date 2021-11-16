/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
  Button,
  Column,
  Iframe,
  Input,
  Image,
  Page,
  Row,
  Divider,
  Typography,
  Pagination
} from '@/presentation/components'
import { currentAccountState } from '@/presentation/state-management/atoms'

import {
  Figcaption,
  Figure,
  OrgItem,
  OrgList,
  Search,
  SearchIcon,
  Title
} from './styles'
import { Props } from './types'
import { UserOrganizationUserModel } from '@/domain/models'

const data = [
  {
    id_organizacao: 1,
    nome_organizacao: 'GWSolucoes',
    chave_organizacao: '123123',
    ambiente_organizacao: {
      id_ambiente: 0,
      nome_ambiente: 'opactc',
      versao_ambiente: 'opactc',
      url_app_ambiente: 'opactc',
      url_app_gweb_ambiente: 'opactc'
    },
    responsavel_organizacao: 0,
    organizacao_ativa: true,
    organizacao_img_logo:
      'https://gw-sas.s3.us-east-2.amazonaws.com/organizacoes/GWSISTEMASDEV/IMG/LOGO/logo.jpg',
    dt_vencimento_organizacao: '2022-12-15T00:00:00Z',
    tipo_acesso: ['u']
  },
  {
    id_organizacao: 2,
    nome_organizacao: 'GWSolucoes',
    chave_organizacao: '123123',
    ambiente_organizacao: {
      id_ambiente: 0,
      nome_ambiente: 'opactc',
      versao_ambiente: 'opactc',
      url_app_ambiente: 'opactc',
      url_app_gweb_ambiente: 'opactc'
    },
    responsavel_organizacao: 0,
    organizacao_ativa: true,
    organizacao_img_logo:
      'https://gw-sas.s3.us-east-2.amazonaws.com/organizacoes/GWSISTEMASDEV/IMG/LOGO/logo.jpg',
    dt_vencimento_organizacao: '2022-12-15T00:00:00Z',
    tipo_acesso: ['r']
  },
  {
    id_organizacao: 3,
    nome_organizacao: 'Nova Organização',
    chave_organizacao: '123123',
    ambiente_organizacao: {
      id_ambiente: 0,
      nome_ambiente: 'opactc',
      versao_ambiente: 'opactc',
      url_app_ambiente: 'opactc',
      url_app_gweb_ambiente: 'opactc'
    },
    responsavel_organizacao: 0,
    organizacao_ativa: true,
    organizacao_img_logo:
      'https://gw-sas.s3.us-east-2.amazonaws.com/organizacoes/GWSISTEMASDEV/IMG/LOGO/logo.jpg',
    dt_vencimento_organizacao: '2022-12-15T00:00:00Z',
    tipo_acesso: ['c']
  },
  {
    id_organizacao: 4,
    nome_organizacao: 'ABC Solucoes',
    chave_organizacao: '123123',
    ambiente_organizacao: {
      id_ambiente: 0,
      nome_ambiente: 'opactc',
      versao_ambiente: 'opactc',
      url_app_ambiente: 'opactc',
      url_app_gweb_ambiente: 'opactc'
    },
    responsavel_organizacao: 0,
    organizacao_ativa: true,
    organizacao_img_logo:
      'https://gw-sas.s3.us-east-2.amazonaws.com/organizacoes/GWSISTEMASDEV/IMG/LOGO/logo.jpg',
    dt_vencimento_organizacao: '2022-12-15T00:00:00Z',
    tipo_acesso: ['u']
  },
  {
    id_organizacao: 5,
    nome_organizacao: 'GWSolucoes',
    chave_organizacao: '123123',
    ambiente_organizacao: {
      id_ambiente: 0,
      nome_ambiente: 'opactc',
      versao_ambiente: 'opactc',
      url_app_ambiente: 'opactc',
      url_app_gweb_ambiente: 'opactc'
    },
    responsavel_organizacao: 0,
    organizacao_ativa: true,
    organizacao_img_logo:
      'https://gw-sas.s3.us-east-2.amazonaws.com/organizacoes/GWSISTEMASDEV/IMG/LOGO/logo.jpg',
    dt_vencimento_organizacao: '2022-12-15T00:00:00Z',
    tipo_acesso: ['r']
  }
]

type IconTypes = {
  [x: string]: any
}

const iconTypes: IconTypes = {
  u: 'fa-user-tie',
  c: 'fa-user-circle',
  r: 'fa-handshake'
}

const Home: React.FC<Props> = ({ userListOrganizationUser }: Props) => {
  const [organizationData, setOrganizationData] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const { getCurrentAccount } = useRecoilValue(currentAccountState)

  const organizationPerPage = 4
  const indexOfLastOrganization = currentPage * organizationPerPage
  const indexOfFirstOrganization = indexOfLastOrganization - organizationPerPage
  const currentOrganization = organizationData.slice(
    indexOfFirstOrganization,
    indexOfLastOrganization
  )

  const handlePaginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  const handlePrevPage = (): void => {
    if (currentPage > 1 && currentPage <= data.length) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = (): void => {
    if (currentPage < data.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    const organizationFiltered = data.filter((organization) => {
      return organization.nome_organizacao
        .toLowerCase()
        .trim()
        .includes(value.toLowerCase().trim())
    })

    setOrganizationData(organizationFiltered)
  }

  const handlePressOrganization = (item: UserOrganizationUserModel): void => {
    console.log(item)
  }

  useEffect(() => {
    userListOrganizationUser
      .search({
        id_usuario: getCurrentAccount()?.id
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <Page>
      <Column hideMobile data-testid="column-home">
        <Iframe
          height="525px"
          data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html"
        />
      </Column>
      <Divider />
      <Column data-testid="column-login">
        <Image src="/images/logo-gw-login-menor.png" alt="GW Image" />
        <Title>Selecione seu acesso</Title>
        <Row>
          <Button variant="text">
            <Figure active>
              <i className="fas fa-user-tie" />
              <Figcaption>Cliente</Figcaption>
            </Figure>
          </Button>
          <Button variant="text">
            <Figure>
              <i className="far fa-handshake" />
              <Figcaption>Representante</Figcaption>
            </Figure>
          </Button>
          <Button variant="text">
            <Figure>
              <i className="fas fa-user-circle" />
              <Figcaption>Colaborador</Figcaption>
            </Figure>
          </Button>
        </Row>
        <Row>
          <Search>
            <SearchIcon>
              <i className="fas fa-search" />
            </SearchIcon>
            <Input
              fullWidth
              placeholder="Pesquise outras Organizações"
              onChange={handleSearch}
            />
          </Search>
        </Row>
        <Title>Selecione a organização desejada</Title>
        <OrgList>
          <Column>
            <div style={{ minHeight: 210 }}>
              {!!currentOrganization.length &&
                currentOrganization.map((item) => (
                  <OrgItem
                    key={item.id_organizacao}
                    onClick={(): void => handlePressOrganization(item)}
                  >
                    <Image src={item.organizacao_img_logo} />
                    <Typography upperCase>{item.nome_organizacao}</Typography>
                    <i className={`fas ${iconTypes[item.tipo_acesso[0]]}`} />
                  </OrgItem>
                ))}
            </div>
          </Column>
          <Column>
            <Pagination
              currentPage={currentPage}
              itemPerPage={organizationPerPage}
              totalData={organizationData.length}
              onPaginate={handlePaginate}
              onPrevPaginate={handlePrevPage}
              onNextPaginate={handleNextPage}
            />
          </Column>
        </OrgList>
      </Column>
    </Page>
  )
}

export default Home
