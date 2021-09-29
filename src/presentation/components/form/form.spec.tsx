import React from 'react'
import { cleanup, render, RenderResult } from '@/main/config/test-utils'

import Form from './form'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Form />)
  return { sut }
}

describe('Form Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const { sut } = makeSut()

    const form = sut.getByTestId('form') as HTMLFormElement
    expect(form.childElementCount).toBe(0)
  })
})
