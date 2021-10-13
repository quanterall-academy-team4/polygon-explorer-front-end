import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer'

////////////////////////// Footer //////////////////////////////////

describe('Footer component tests: ', () => {

    test('is Footer a Vue instance', () => {
    
      const wrapper = mount(Footer);
    
      expect(wrapper.vm).toBeTruthy();
    });
    
    test('is img exists ', () => {
    
      const wrapper = mount(Footer);
      const logo = wrapper.find('img');
    
      expect(logo.exists()).toBe(true);
    });
    
    
    test('is github href correct', () => {
    
      const wrapper = mount(Footer);
      const link = wrapper.find('a').attributes().href;
    
      expect(link).toBe('https://github.com/quanterall-academy-team4/polygon-explorer-front-end');
    });

    
    test('Footer', () => {

      const wrapper = mount(Footer);

      expect(wrapper).toBeTruthy();
      expect(wrapper.isVisible()).toBe(true);
    });
    
    
});