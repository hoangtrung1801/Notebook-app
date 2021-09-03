const { create } = require('domain');
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // no relative path (if error then fix)
  win.loadFile('./public/index.html');
}

app.whenReady().then(() => {
  createWindow();
  createWindow();

  app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit();
})