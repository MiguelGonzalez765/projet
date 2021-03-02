import { shallowMount } from '@vue/test-utils'; 
import Footer from '../../src/components/Footer.vue';


describe("PiedDePage", () => {
  it("Le footer est le composant actuel", () => {
    const sectionFooter = shallowMount(Footer, {});

    //s'il est vrai 
    expect(sectionFooter.is(Footer)).toBe(true);
  });
  it("le composant est footer", () => {
    const sectionFooter = shallowMount(Footer, {});

    //si"il est false
    expect(sectionFooter.is(Footer)).toBe(false);
  });
});