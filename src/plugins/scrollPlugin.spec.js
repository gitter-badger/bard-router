import scrollPlugin from './scrollPlugin'
import Router from '../Router'

const windowMock = {
  scrollTo: jest.fn(),
}

const routerMock = {
  on: jest.fn(),
  off: jest.fn(),
}

const testRoutes = {
  '/': {},
  '/page': {},
}

describe('scrollPlugin', () => {
  describe('register', () => {
    it('should add the event handlers', () => {
      scrollPlugin.register(routerMock)
      const spyArgs = routerMock.on.mock.calls[0]
      expect(spyArgs[0]).toBe('afterNav')
      expect(spyArgs[1].name.endsWith('scrollPluginHandler')).toBe(true)
    })

    it('should return a disposer function', () => {
      const unregister = scrollPlugin.register(routerMock)
      unregister()
      const spyArgs = routerMock.off.mock.calls[0]
      expect(spyArgs[0]).toBe('afterNav')
      expect(spyArgs[1].name.endsWith('scrollPluginHandler')).toBe(true)
    })
  })

  describe('when navigating', () => {
    test('the router should call the scroll method', () => {
      const router = new Router({routes: testRoutes})
      scrollPlugin.register(router, windowMock)
      router.goTo({route: '/page'})
      expect(windowMock.scrollTo).toHaveBeenCalledWith(0, 0)
    })
  })
})
