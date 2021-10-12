import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer'
import { createStore } from 'vuex'
import TransactionsTable from '@/components/TransactionsTable'
import BlocksTable from '@/components/BlocksTable'

describe('Can mount app', () => {
  test('Navbar', () => {
    document.body.innerHTML = '<div id="app">' + '</div>';
    require('@/main.js')
    const navbar = document.getElementById('navbar');
    expect(navbar).toBeTruthy();
    expect(navbar.textContent).toEqual('TranscationsAccountsBlocksAboutHome');
  
  });

  test('Footer', () => {
    const footer = shallowMount(Footer)
    expect(footer).toBeTruthy();
    expect(footer.isVisible()).toBe(true);
  });
  
  test('Transactions table', async () => {
  
    const wrapper = shallowMount(TransactionsTable)
  
    await wrapper.find('button').trigger('click')
  
    wrapper.setData({argument: 'someArg'});
    await wrapper.find('button').trigger('click');
  
    
  })
})

describe('Vuex Store', () => {
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






