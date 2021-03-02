import { shallowMount } from '@vue/test-utils'; 
import Header from '../../src/components/Header.vue';

describe('Header.vue Test', () => {
    it('renders message quad le component est crée', () => {
      // render le component
      const wrapper = shallowMount(Header, {
        propsData: {
          title: 'Vue Project'
        }
      })
  
      // Vérifier le nom du component
      expect(wrapper.name()).toMatch('Header')
  
      // check que que le titre est  rendered
      expect(wrapper.text()).toMatch('Vue Project')
    })
  })
  