import React from 'react'
import faker from 'faker'

import { Input } from '@/presentation/components'
import { cleanup, render, RenderResult } from '@/main/config/test-utils'

type SutTypes = {
  sut: RenderResult
}

const mockedInput = {
  helpText: faker.name.firstName()
}

const makeSut = (): SutTypes => {
  const sut = render(<Input helpText={mockedInput.helpText} disabled />)
  return {
    sut
  }
}

describe('Input Component', () => {
  afterEach(cleanup)
  it('should render helpText', () => {
    const { sut } = makeSut()
    const helpeText = sut.getByTestId('help-text')
    expect(helpeText.textContent).toBe(mockedInput.helpText)
  })
  it('should render disabled when disabled is passed', () => {
    const { sut } = makeSut()
    const input = sut.getByTestId('input') as HTMLInputElement
    expect(input.disabled).toBe(true)
  })
})
