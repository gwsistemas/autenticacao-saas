import faker from 'faker'
import { FieldValidationSpy } from '@/validation/test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

interface SutTypes {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (fieldName = faker.database.column()): SutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(fieldValidationSpy)
  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  test('should return error if any validation it is fails', () => {
    const { sut, fieldValidationSpy } = makeSut()
    const fieldName = faker.name.firstName()
    const errorMessage = faker.random.word()
    fieldValidationSpy[0].error = new Error(errorMessage)
    fieldValidationSpy[1].error = new Error(errorMessage)
    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBe(errorMessage)
  })
  test('should return falsy if validation it is correct', () => {
    const { sut } = makeSut()
    const fieldName = faker.name.firstName()
    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBeFalsy()
  })
})
