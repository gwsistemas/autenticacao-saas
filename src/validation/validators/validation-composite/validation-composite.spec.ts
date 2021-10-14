import { FieldValidationSpy } from '@/validation/test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

describe('ValidationComposite', () => {
  test('should return error if any validation it is fails', () => {
    const fieldValidationSpy = new FieldValidationSpy('field_name')
    const validationComposite = ValidationComposite.build([fieldValidationSpy])
    const errorMessage = 'any_error'
    fieldValidationSpy.error = new Error(errorMessage)
    const error = validationComposite.validate('any_field', 'any_word')
    expect(error).toBe(errorMessage)
  })
})
