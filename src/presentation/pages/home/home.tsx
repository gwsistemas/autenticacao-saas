/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'
import {
  Button,
  Column,
  Iframe,
  Input,
  Image,
  Page,
  Row,
  Divider,
  Pagination,
  MessageModal
} from '@/presentation/components'
import {
  currentAccountState,
  currentOrganizationState
} from '@/presentation/state-management/atoms'

import {
  Figcaption,
  Figure,
  OrgList,
  Search,
  SearchIcon,
  Title
} from './styles'
import { Props } from './types'
import { UserOrganizationUserModel } from '@/domain/models'
import { UserOrganizationList } from './components'

const Home: React.FC<Props> = ({
  userListOrganizationUser,
  loginSystem
}: Props) => {
  const [organizationData, setOrganizationData] = useState([])
  const [organizationLoading, setOrganizationDataLoading] = useState(false)
  const [organizationType, setOrganizationType] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    type: 'u',
    nomeOrganizacao: ''
  })
  const [messageModal, setMessageModal] = useState({
    open: false,
    message: ''
  })
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  const { setCurrentOrganization } = useRecoilValue(currentOrganizationState)

  const history = useHistory()

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
    if (currentPage > 1 && currentPage <= organizationData.length) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = (): void => {
    if (currentPage < organizationData.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const nomeOrganizacao = event.target.value
    setFilters((prevFilters) => ({
      ...prevFilters,
      nomeOrganizacao
    }))
    // const organizationFiltered = data.filter((organization) => {
    //   return organization.nome_organizacao
    //     .toLowerCase()
    //     .trim()
    //     .includes(value.toLowerCase().trim())
    // })

    // setOrganizationData(organizationFiltered)
  }
  const handleOpenMessageModalToggle = (message: string = ''): void => {
    setMessageModal((prevState) => ({
      open: !prevState.open,
      message
    }))
  }

  const handlePressOrganization = (item: UserOrganizationUserModel): void => {
    const typeAcessoOrganization = item.tipo_acesso[0]
    if (typeAcessoOrganization === 'c') {
      void handleSendOrganization(item, typeAcessoOrganization)
    } else {
      handleLoadSupplierCustomers(item)
    }
  }

  const handleSendOrganization = async (
    item: UserOrganizationUserModel,
    tipoAcesso: string
  ): Promise<void> => {
    try {
      await loginSystem.auth({
        linkSistema: item.ambiente_organizacao.url_app_ambiente,
        clienteFornecedorId: -1,
        isGweb: false,
        login: getCurrentAccount().email,
        senha: getCurrentAccount().senha,
        tipoAcesso,
        organizacaoEscolhidaId: item.id_organizacao
      })
      window.location.href = item.ambiente_organizacao.url_app_ambiente
    } catch (error) {
      handleOpenMessageModalToggle(
        'Algo de errado aconteceu, tente novamente mais tarde.'
      )
    }
  }

  const handleLoadSupplierCustomers = (
    organizationItem: UserOrganizationUserModel
  ): void => {
    setCurrentOrganization(organizationItem)
    history.push(`fornecedores/${organizationItem.id_organizacao}`)
  }

  useEffect(() => {
    setOrganizationDataLoading(true)
    userListOrganizationUser
      .search({
        id_usuario: getCurrentAccount()?.id
      })
      .then((data) => {
        if (!data?.length) {
          handleOpenMessageModalToggle(
            'Você não possui acessi aos ambientes das organizações'
          )
          return
        }
        setOrganizationData(data)
        setOrganizationDataLoading(false)
      })
      .catch((error) => {
        setOrganizationDataLoading(false)
        console.log(error.message)
      })
  }, [])

  return (
    <>
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
            <Button
              variant="text"
              onClick={(): void => setOrganizationType('u')}
            >
              <Figure active={organizationType === 'u'}>
                <i className="fas fa-user-tie" />
                <Figcaption>Cliente</Figcaption>
              </Figure>
            </Button>
            <Button
              variant="text"
              onClick={(): void => setOrganizationType('r')}
            >
              <Figure active={organizationType === 'r'}>
                <i className="far fa-handshake" />
                <Figcaption>Representante</Figcaption>
              </Figure>
            </Button>
            <Button
              variant="text"
              onClick={(): void => setOrganizationType('c')}
            >
              <Figure active={organizationType === 'c'}>
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
              {
                <UserOrganizationList
                  loading={organizationLoading}
                  organizationsData={currentOrganization}
                  textSearch={filters.nomeOrganizacao}
                  onClickOrganization={handlePressOrganization}
                  organizationType={organizationType}
                />
              }
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
      <MessageModal
        open={messageModal.open}
        onClose={handleOpenMessageModalToggle}
        width="100%"
        maxWidth="50rem"
      >
        <p>{messageModal.message}</p>
      </MessageModal>
    </>
  )
}

export default Home
