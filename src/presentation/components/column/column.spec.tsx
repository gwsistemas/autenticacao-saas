import React from 'react'
import { cleanup, render, RenderResult } from '@/main/config/test-utils'

import Column from './column'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Column />)
  return { sut }
}

describe('Column Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const { sut } = makeSut()

    const column = sut.getByTestId('column') as HTMLDivElement
    expect(column.childElementCount).toBe(0)
  })
})
