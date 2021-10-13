import { mount } from '@vue/test-utils'
import Home from '@/views/Home'

////////////////////////// Home ///////////////////////////////

describe('Home page view tests: ', () => {

   
    test('is Footer component added ', () => {
    
        const wrapper = mount(Home);
        const footer = wrapper.find('Footer');
    
        expect(footer.exists()).toBe(true);
    });
    
});