import React from 'react'
import faker from 'faker'
import { cleanup, render, RenderResult } from '@/main/config/test-utils'

import Login from './login'
import { ValidationStub } from '@/presentation/test/mock-validation'
import { AuthenticationSpy } from '@/presentation/test/mock-authentication'
import { ForgetPasswordSpy } from '@/presentation/test/mock-forget-password'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
  authenticationSpy: AuthenticationSpy
}
type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const forgetPasswordSpy = new ForgetPasswordSpy()
  const sut = render(
    <Login
      validation={validationStub}
      authentication={authenticationSpy}
      forgetPassword={forgetPasswordSpy}
    />
  )
  validationStub.errorMessage = params.validationError
  return { sut, validationStub, authenticationSpy }
}

describe('Login Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const validationError = faker.random.word()
    const { sut } = makeSut({ validationError })

    const columns = sut.getAllByTestId('column-login')
    columns.forEach((column) => {
      expect(column.childElementCount).toBeGreaterThan(0)
    })

    const form = sut.getByTestId('form-login') as HTMLFormElement
    expect(form.childElementCount).toBeGreaterThan(0)

    const submiButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submiButton.disabled).toBe(false)
  })
})
