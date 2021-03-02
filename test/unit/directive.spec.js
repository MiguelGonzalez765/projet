import { mount} from '@vue/test-utils'; 
import translations, { translation } from '../../src/mixins/translations';

describe('translation', () => {
   // TEST#11  
     test(" on evoie la propiete title passer", () => {
       const Component = {
         render() {},
         title: 'passer',
         mixins: [translations]
       }
       mount(Component)
       expect(document.title).toBe('passer')
     })
   // TEST#12  
     test(" le title doit existir pour que le document se charge", () => {
       document.title = 'on charge'
       const Component = {
         render() {},
         mixins: [translations]
       }
       mount(Component)
       expect(document.title).toBe('on charge')
     })
   })