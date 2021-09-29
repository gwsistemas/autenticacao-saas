import React from 'react'
import { cleanup, render, RenderResult } from '@/main/config/test-utils'

import Login from './login'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />)
  return { sut }
}

describe('Login Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const { sut } = makeSut()

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
