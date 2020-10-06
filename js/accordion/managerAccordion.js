import AbortController from './accordionClass.js';


export const createFqa = (_ar) => {
    _ar.map(item => {
      let accordion = new AbortController("#id_accordion", item.q,item.a , item.id);
      accordion.render();
    })
}