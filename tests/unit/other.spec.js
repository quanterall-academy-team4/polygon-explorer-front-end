import { shallowMount } from '@vue/test-utils'
import TransactionsTable from '@/components/TransactionsTable'


describe('Can mount app', () => {
  test('Navbar', () => {
    document.body.innerHTML = '<div id="app">' + '</div>';
    require('@/main.js')
    const navbar = document.getElementById('navbar');
    expect(navbar).toBeTruthy();
    expect(navbar.textContent).toEqual('TranscationsAccountsBlocksAboutHome');
  
  });

});











