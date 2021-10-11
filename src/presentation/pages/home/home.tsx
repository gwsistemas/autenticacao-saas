import React from 'react'
import { Button, Column, Iframe, Input, Logo, Page, Row } from '@/presentation/components'

import { Divider, Figcaption, Figure, OrgItem, OrgList, Pagination, PaginationList, PaginationListItem, Search, SearchIcon, Title } from './styles'
import { Typography } from '@/presentation/components/typography'

const Home: React.FC = () => {
  return (
    <Page>
      <Column hideMobile data-testid="column-home">
        <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html" />
      </Column>
      <Divider />
      <Column data-testid="column-login">
        <Logo url="/images/logo-gw-login-menor.png" alt="GW Logo" />
        <Title>
          Selecione seu acesso
        </Title>
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
        <Title>
          Selecione a organização desejada
        </Title>
        <OrgList>
          <Column>
            <OrgItem>
              <Logo url="/images/logo-gw-login-menor.png" alt="GW Logo" />
              <Typography>GWSISTEMAS QA</Typography>
              <i className="fas fa-user-tie" />
            </OrgItem>
            <OrgItem>
              <Logo url="/images/logo-gw-login-menor.png" alt="GW Logo" />
              <Typography>GWSISTEMAS QA</Typography>
              <i className="fas fa-user-tie" />
            </OrgItem>
            <OrgItem>
              <Logo url="/images/logo-gw-login-menor.png" alt="GW Logo" />
              <Typography>GWSISTEMAS QA</Typography>
              <i className="fas fa-user-tie" />
            </OrgItem>
          </Column>
          <Column>
            <Pagination>
              <Button disabled>{'<'}</Button>
              <PaginationList>
                <PaginationListItem>
                  <Button active>1</Button>
                </PaginationListItem>
                <PaginationListItem>
                  <Typography>/</Typography>
                </PaginationListItem>
                <PaginationListItem>
                  <Button>2</Button>
                </PaginationListItem>
              </PaginationList>
              <Button>{'>'}</Button>
            </Pagination>
          </Column>
        </OrgList>
      </Column>
    </Page>
  )
}

export default Home
