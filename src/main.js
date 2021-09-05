const { app, BrowserWindow, Menu, MenuItem, ipcMain} = require("electron");
const Store = require('electron-store');
const path = require("path");

const store = new Store();
store.set('data', [
  {
    id: '0',
    title: 'Page 1',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis cum deleniti aliquid repellat, maiores tempora cumque perspiciatis ea adipisci in dolore omnis magni. Deleniti sunt et laudantium sed vel necessitatibus.' 
  },
  {
    id: '1',
    title: 'Page 2',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis cum deleniti aliquid repellat, maiores tempora cumque perspiciatis ea adipisci in dolore omnis magni. Deleniti sunt et laudantium sed vel necessitatibus.' 
  }
])

let data = [
  {
    id: '0',
    title: 'Page 1',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis cum deleniti aliquid repellat, maiores tempora cumque perspiciatis ea adipisci in dolore omnis magni. Deleniti sunt et laudantium sed vel necessitatibus.' 
  },
  {
    id: '1',
    title: 'Page 2',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis cum deleniti aliquid repellat, maiores tempora cumque perspiciatis ea adipisci in dolore omnis magni. Deleniti sunt et laudantium sed vel necessitatibus.' 
  }
]

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});


function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    backgroundColor: '#000'
  });

  // no relative path (if error then fix)
  win.loadFile("./public/index.html");
}

// IPCMain
ipcMain.on('getData', (e) => {
  e.returnValue = data;
})

let pageActiveId = '0' 
ipcMain.on('pageActiveId:get', (e) => {
  e.returnValue = pageActiveId;
})

ipcMain.on('pageActiveId:post', (e, arg) => {
  pageActiveId = arg;
})

ipcMain.handle('page:put', (e, arg) => {
  data = data.map(page => {
    if(page.id === arg.id) {
      return arg;
    }
    return page;
  })
  return data;
})