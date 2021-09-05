const { app, BrowserWindow, Menu, MenuItem, ipcMain} = require("electron");
const Store = require('electron-store');
const path = require("path");

const store = new Store();

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