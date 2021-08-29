import React from 'react'
import { Input } from '@/presentation/components'

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
    </div>
  )
}

export default Login
