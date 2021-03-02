import { mount } from '@vue/test-utils'; 
import Projet from '../../src/views/Projet.vue'


describe("Test Projetvuu", () => {

  test('Bottom est-til une instance de Vue ?', () => {

      const wrapper = mount(Projet, {
          Data: {
              Projet:{
                  name: "Projet"
              }
          }
      })

      // Evalue si le mesage est affiché
      expect(wrapper.isVueInstance()).toBeTruthy();
  })

})