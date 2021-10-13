import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import BlocksTable from '@/components/BlocksTable'

describe('Store tests', () => {
    const latestBlocks = []
    const latestTransactions = []
    let mockGetLatestBlocks
    let store
    let mockRoute
  
  
    beforeEach(() => {
      mockGetLatestBlocks = jest.fn()
      store = createStore({
        state: {
          latestBlocks: [latestBlocks],
          latestTransactions: [latestTransactions]
        },
        mutations: {
          getLatestBlocks: mockGetLatestBlocks
        }
      })
      mockRoute = {
        params: {
          fullPath: 'http://localhost:3000/blocks/latest'
        }
      }
    })
  
    test('uses vuex last blocks state', async () => {
      const wrapper = shallowMount(BlocksTable, {
        global: {
          plugins: [store],
          mocks: {
            $route: mockRoute
          }
        }
      })
      expect(wrapper.html()).toContain(latestBlocks)
    })
  
    test('calls getLatestBlocks mutation function', async () => {
      const wrapper = shallowMount(BlocksTable, {
        global: {
          plugins: [store],
          mocks: {
            $route: mockRoute
          }
        }
      })
      const button = wrapper.find('button')
      await button.trigger('click')
  
      expect(mockGetLatestBlocks).toHaveBeenCalled()
    })
    
})
     