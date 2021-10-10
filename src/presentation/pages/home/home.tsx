import React from 'react'
import { Column, Iframe, Logo, Page, Row } from '@/presentation/components'

import { Divider, Figcaption, Figure, OrgItem, OrgList, Title } from './styles'
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
          <Figure>
            <i className="fas fa-user-tie" />
            <Figcaption>Cliente</Figcaption>
          </Figure>
          <Figure>
            <i className="far fa-handshake" />
            <Figcaption>Representante</Figcaption>
          </Figure>
          <Figure>
            <i className="fas fa-user-circle" />
            <Figcaption>Colaborador</Figcaption>
          </Figure>
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
        </OrgList>
      </Column>
    </Page>
  )
}

export default Home
