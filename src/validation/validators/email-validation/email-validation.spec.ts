import { InvalidFieldError } from '@/validation/errors/invalid-field-erorr'
import faker from 'faker'
import { EmailValidation } from './email-validation'

const makeSut = (field: string): EmailValidation => new EmailValidation(field)

describe('EmailValidation', () => {
  it('should return error if email it is isvalid', () => {
    const field = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(field))
  })
  it('should return falsy if email it is valid', () => {
    const field = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
