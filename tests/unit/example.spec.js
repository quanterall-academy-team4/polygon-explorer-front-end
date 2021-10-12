import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import BlocksTable from '@/components/BlocksTable'
import TransactionsTable from '@/components/TransactionsTable'


test('Can mount app', () => {
  document.body.innerHTML = '<div id="app">' + '</div>';

  require('@/main.js');

  const pElement = document.getElementById('navbar');
  expect(pElement).toBeTruthy();
  expect(pElement.textContent).toEqual('TranscationsAccountsBlocksAboutHome');
});

test('Transactions table', async () => {

  const wrapper = shallowMount(TransactionsTable)

  await wrapper.find('button').trigger('click')

  wrapper.setData({argument: 'someArg'});
  await wrapper.find('button').trigger('click');

  
})
