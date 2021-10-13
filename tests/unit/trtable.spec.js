import TransactionsTable from '@/components/TransactionsTable'
import { shallowMount } from '@vue/test-utils'


describe('Transactions table tests', () => {

  test('Transactions table', async () => {
  
    const wrapper = shallowMount(TransactionsTable)
  
    await wrapper.find('button').trigger('click')
  
    wrapper.setData({argument: 'someArg'});
    
    await wrapper.find('button').trigger('click');
  
}); 

});