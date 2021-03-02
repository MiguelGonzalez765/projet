import { shallowMount } from '@vue/test-utils'; 
import {Accueil} from  "../../src/views/Accueil.vue";

describe('componente Accueil.vue', () => {

  it('Il doit changer la valeur = true', () => {
    /// Creer una instancia du component
   const wrapper = shallowMount(Accueil);
   /// Evaluer que la valeur est=  "false" 
   expect(wrapper.vm.okProfile).toBe(false);
  /// Excute la methode qui change la valeur de la variable = "true" 
   wrapper.vm.okProfile();
    /// Evaluer que la valeur okProfile = "true" 
   expect(wrapper.vm.okProfile).toBe(true);
    
  })
 
 
 })