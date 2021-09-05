const { contextBridge } = require('electron');
const Store = require('electron-store');
const { nanoid } = require('nanoid');
const store = new Store();
let pageActiveId = '0';

contextBridge.exposeInMainWorld('getData', () => store.get('data'))

contextBridge.exposeInMainWorld('page', {
  get: (id) => {
    const data = store.get('data');
    return data.find(page => page.id === id);
  },
  post: () => {
    store.set('data', [
      ...store.get('data'),
      {
        id: nanoid(),
        title: 'Untiled',
        content: ''
      }
    ])
    console.log('new page', store.get('data'));
  },
  put: (newPage) => {
    const data = store.get('data');
    store.set('data', 
      data.map(page => {
        if(page.id === newPage.id) {
          return newPage;
        }
        return page;
      })
    )
  },
})

contextBridge.exposeInMainWorld('pageActiveId', {
  get: () => pageActiveId,
  put: (id) => pageActiveId = id,
})