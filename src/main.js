const { app, BrowserWindow, Menu, MenuItem, ipcMain} = require("electron");
const path = require("path");
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

const menu = new Menu();
menu.append(
  new MenuItem({
    label: "Electron",
    submenu: [
      {
        role: "help",
        acceleratorWorksWhenHidden:
          process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
        click: () => {
          console.log("hello world");
        },
      },
    ],
  })
);

// Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

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