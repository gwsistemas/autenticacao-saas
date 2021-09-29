import React from 'react'
import { cleanup, render, RenderResult } from '@/main/config/test-utils'

import Button from './button'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Button />)
  return { sut }
}

describe('Button Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const { sut } = makeSut()

    const button = sut.getByTestId('button') as HTMLButtonElement
    expect(button.disabled).toBe(false)
  })
})
