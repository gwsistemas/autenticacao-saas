import { ValidationBuilder } from '@/validation/builders/validation-builder'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().build(),
    ...ValidationBuilder.field('password').required().build()
  ])
}
