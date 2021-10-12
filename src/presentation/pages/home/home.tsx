import React from 'react'
import {
  Button,
  Column,
  Iframe,
  Input,
  Image,
  Page,
  Row,
  Divider,
} from '@/presentation/components'

import {
  Figcaption,
  Figure,
  OrgItem,
  OrgList,
  Pagination,
  PaginationList,
  PaginationButton,
  Search,
  SearchIcon,
  Title,
} from './styles'
import { Typography } from '@/presentation/components/typography'

const Home: React.FC = () => {
  return (
    <Page>
      <Column hideMobile data-testid="column-home">
        <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html" />
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
            <Input fullWidth placeholder="Pesquise outras Organizações" />
          </Search>
        </Row>
        <Title>Selecione a organização desejada</Title>
        <OrgList>
          <Column>
            <OrgItem>
              <Image src="/images/logo-gw-login-menor.png" />
              <Typography>GWSISTEMAS QA</Typography>
              <i className="fas fa-user-tie" />
            </OrgItem>
            <OrgItem>
              <Image src="/images/logo-gw-login-menor.png" />
              <Typography>GWSISTEMAS QA</Typography>
              <i className="fas fa-user-tie" />
            </OrgItem>
            <OrgItem>
              <Image src="/images/logo-gw-login-menor.png" />
              <Typography>GWSISTEMAS QA</Typography>
              <i className="fas fa-user-tie" />
            </OrgItem>
          </Column>
          <Column>
            <Pagination>
              <PaginationButton disabled>{'<'}</PaginationButton>
              <PaginationList>
                <PaginationButton active>1</PaginationButton>
                <PaginationButton>
                  <Typography>/</Typography>
                </PaginationButton>
                <PaginationButton>2</PaginationButton>
              </PaginationList>
              <PaginationButton>{'>'}</PaginationButton>
            </Pagination>
          </Column>
        </OrgList>
      </Column>
    </Page>
  )
}

export default Home
