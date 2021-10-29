import { createMemoryHistory, MemoryHistory } from 'history'
import { mockAccountModel } from '@/tests/domain/mocks'
import { renderWithHistory } from '@/tests/presentation/mocks'
import { PrivateRoute } from '.'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/home'] })
  renderWithHistory({ history, Page: PrivateRoute, account })
  return {
    history
  }
}

describe('PrivateRoute', () => {
  it('should redirect to / if token is empty', () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/')
  })
  it('should render current component if token is not empty', () => {
    const { history } = makeSut()
    expect(history.location.pathname).toBe('/home')
  })
})
