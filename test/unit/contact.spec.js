import { mount } from '@vue/test-utils';
import Contact from '../../src/views/Contact.vue';

describe("Testin le component Contact", () => {

  
  test('Element dans la component', () => {
      const wrapper = mount(Contact)
     // vérifie si l'element exist
      expect(wrapper.find('#selectContactType')).toBeTruthy;
  })
  test('On trouve  des elements', () => {
      const wrapper = mount(Contact)
    expect(wrapper.find('#selectContactType').isEmpty()).toBeTruthy;
  })
 
})