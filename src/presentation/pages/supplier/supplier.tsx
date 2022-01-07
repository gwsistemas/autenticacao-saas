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
  MessageModal
} from '@/presentation/components'
import {
  currentAccountState,
  currentOrganizationState
} from '@/presentation/state-management/atoms'
import { Props } from './types'
import { Search, SearchIcon, Title } from './styles'
import SupplierList from './components/supplier-list'
import { SupplierCustomer, SupplierCustomersList } from '@/domain/models'

const Supplier: React.FC<Props> = ({
  loadSupplierCustomers,
  loginSystem
}: Props) => {
  const [textSearch, setTextSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [suppliersCustomers, setSuppliersCustomers] =
    useState<SupplierCustomersList>([])
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

  const params = useParams<{ organizationId: string }>()
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  const { getCurrentOrganization } = useRecoilValue(currentOrganizationState)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTextSearch(event.target.value)
  }

  const handleLoadSupplierCustomers = async (): Promise<void> => {
    try {
      setLoading(true)
      const suppliersData = await loadSupplierCustomers.load({
        organizacao_id: Number(params.organizationId)
      })
      setSuppliersCustomers(suppliersData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  // const handleRedirectSupplier = async (supplierItem: SupplierCustomer) => {
  //   try {
  //     await loginSystem.auth({
  //       linkSistema: item.ambiente_organizacao.url_app_ambiente,
  //       clienteFornecedorId: -1,
  //       isGweb: false,
  //       login: getCurrentAccount().email,
  //       senha: getCurrentAccount().senha,
  //       tipoAcesso,
  //       organizacaoEscolhidaId: item.id_organizacao
  //     })
  //     window.location.href = item.ambiente_organizacao.url_app_ambiente
  //   } catch (error) {
  //     handleOpenMessageModalToggle(
  //       'Algo de errado aconteceu, tente novamente mais tarde.'
  //     )
  //   }
  // }
  const handleRedirectSupplier = (supplierItem: SupplierCustomer): void => {
    const account = getCurrentAccount()
    const organization = getCurrentOrganization
    console.log('organization = ', organization)
    console.log('account1 = ', account)
  }

  const handleClickSupplier = (supplierItem: SupplierCustomer): void => {
    handleRedirectSupplier(supplierItem)
  }

  useEffect(() => {
    if (params.organizationId) {
      void handleLoadSupplierCustomers()
    }
  }, [params.organizationId])

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
            <Search>
              <SearchIcon>
                <i className="fas fa-search" />
              </SearchIcon>
              <Input
                fullWidth
                placeholder="Pesquise outras representantes"
                onChange={handleSearch}
                value={textSearch}
              />
            </Search>
          </Row>
          <Title>Selecione o fornecedor desejado</Title>
          <div
            style={{
              padding: '0px 7rem'
            }}
          >
            <SupplierList
              loading={loading}
              suppliersData={suppliersCustomers}
              textSearch={textSearch}
              onClickSupplier={handleClickSupplier}
            />
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

export default Supplier
