import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import {
  Column,
  Iframe,
  Input,
  Image,
  Page,
  Row,
  Divider,
  MessageModal,
  Pagination
} from '@/presentation/components'
import {
  currentAccountState,
  currentOrganizationState
} from '@/presentation/state-management/atoms'
import { Props } from './types'
import { Search, SearchIcon, Title } from './styles'
import SupplierList from './components/supplier-list'
import { SupplierCustomer, SupplierCustomersList } from '@/domain/models'
import { lowerCaseAndTrim } from '@/presentation/utitls/text'
import { AcessesTypes } from '../home/types'

const acessesTypes: AcessesTypes = {
  plural: { u: 'clientes', c: 'colaboradores', r: 'representantes' },
  single: { u: 'cliente', c: 'colaborador', r: 'representante' }
}

const Suppliers: React.FC<Props> = ({
  loadSupplierCustomers,
  loginSystem
}: Props) => {
  const [loading, setLoading] = useState(false)
  const [suppliersCustomers, setSuppliersCustomers] =
    useState<SupplierCustomersList>([])
  const [suppliersCustomersFiltered, setSuppliersCustomersFiltered] =
    useState<SupplierCustomersList>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [messageModal, setMessageModal] = useState({
    open: false,
    message: ''
  })
  const handleOpenMessageModalToggle = (message: string = ''): void => {
    setMessageModal((prevState) => ({
      open: !prevState.open,
      message
    }))
  }

  const suppliersPerPage = 4
  const indexOfLastOrganization = currentPage * suppliersPerPage
  const indexOfFirstOrganization = indexOfLastOrganization - suppliersPerPage
  const currentSuppliers = suppliersCustomersFiltered.slice(
    indexOfFirstOrganization,
    indexOfLastOrganization
  )

  const handlePaginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  const handlePrevPage = (): void => {
    if (currentPage > 1 && currentPage <= suppliersCustomersFiltered.length) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = (): void => {
    if (currentPage < suppliersCustomersFiltered.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const params = useParams<{ organizationId: string }>()
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  const { getCurrentOrganization } = useRecoilValue(currentOrganizationState)

  const currentOrganization = getCurrentOrganization()

  const filterSuppliersByTypeAccess = (
    data: SupplierCustomersList
  ): SupplierCustomersList => {
    return data.filter(
      (supplier) => supplier.tipo_acesso === currentOrganization.type
    )
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    const suppliersFiltered = suppliersCustomers.filter((supplierItem) =>
      lowerCaseAndTrim(supplierItem.razao_social).includes(
        lowerCaseAndTrim(value)
      )
    )
    setSuppliersCustomersFiltered(
      filterSuppliersByTypeAccess(suppliersFiltered)
    )
    setCurrentPage(1)
  }

  const handleLoadSupplierCustomers = async (): Promise<void> => {
    try {
      setLoading(true)
      const suppliersData = await loadSupplierCustomers.load({
        organizacao_id: Number(params.organizationId)
      })
      setSuppliersCustomersFiltered(filterSuppliersByTypeAccess(suppliersData))
      setSuppliersCustomers(suppliersData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      handleOpenMessageModalToggle(error.message)
    }
  }

  const handleRedirectSupplier = async (
    supplierItem: SupplierCustomer
  ): Promise<void> => {
    try {
      await loginSystem.auth({
        linkSistema: currentOrganization.ambiente_organizacao.url_app_ambiente,
        clienteFornecedorId: -1,
        isGweb: true,
        login: getCurrentAccount().email,
        senha: getCurrentAccount().senha,
        tipoAcesso: supplierItem.tipo_acesso,
        organizacaoEscolhidaId: currentOrganization.id_organizacao
      })
      window.location.href =
        currentOrganization.ambiente_organizacao.url_app_ambiente
    } catch (error) {
      handleOpenMessageModalToggle(
        'Algo de errado aconteceu, tente novamente mais tarde.'
      )
    }
  }

  const handleClickSupplier = (supplierItem: SupplierCustomer): void => {
    void handleRedirectSupplier(supplierItem)
  }

  const textSingleTerm = acessesTypes.single[currentOrganization.type]
  const textPluralTerm = acessesTypes.plural[currentOrganization.type]

  useEffect(() => {
    if (params.organizationId) {
      void handleLoadSupplierCustomers()
    }
  }, [params])

  return (
    <>
      <Page>
        <Column hideMobile>
          <Iframe
            height="525px"
            data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html"
          />
        </Column>
        <Divider />
        <Column>
          <Image src="/images/logo-gw-login-menor.png" alt="GW Image" />
          <Row>
            <Search>
              <SearchIcon>
                <i className="fas fa-search" />
              </SearchIcon>
              <Input
                fullWidth
                placeholder={`Pesquise outros ${textPluralTerm}`}
                onChange={handleSearch}
              />
            </Search>
          </Row>
          <Title>{`Selecione o ${textSingleTerm} desejado`}</Title>
          <div
            style={{
              padding: '0px 7rem'
            }}
          >
            <Column>
              <SupplierList
                loading={loading}
                suppliersData={currentSuppliers}
                onClickSupplier={handleClickSupplier}
              />
            </Column>
            <Column>
              <Pagination
                currentPage={currentPage}
                itemPerPage={suppliersPerPage}
                totalData={suppliersCustomersFiltered.length}
                onPaginate={handlePaginate}
                onPrevPaginate={handlePrevPage}
                onNextPaginate={handleNextPage}
              />
            </Column>
          </div>
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

export default Suppliers
