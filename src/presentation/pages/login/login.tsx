import React from 'react'
import { Input, Typography } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div>
      <img src="/images/login-transparente.png" alt="GW Soluções" />
      <img src="/images/logo-gw-login-menor.png" alt="GW Logo" />
      Login Screen
      <Input
        placeholder="Seu email"
        helpText="Riquired"
        label="E-mail"
      />
      <Typography variant="h1" color="primaryText">Headline H1</Typography>
      <Typography>Body P</Typography>
    </div>
  )
}

export default Login
