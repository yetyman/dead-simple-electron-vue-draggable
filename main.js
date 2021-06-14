const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron');
const { ipcRenderer } = require('electron/renderer');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

async function createWindow() {
    console.log('main js create window')
    // Create the browser window.
     win = new BrowserWindow({
        kiosk: false,
         title: "Toolkit",
         fullscreen: false,
          webPreferences: {
            useContentSize: true,
            enableRemoteModule: true,
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: `${__dirname}/preload.js`
         },
         show: true
    })
    win.$ = win.jQuery = require('jquery');
    win.setMenu(null);

    win.webContents.openDevTools();
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

//Below are messages coming from the renderer process.
ipcMain.on("open-devtools", (event, args) => {
    win.webContents.openDevTools();
});

ipcMain.on("show-main", (event, args) => {
    win.show();
    win.maximize();
});

ipcMain.on("reload", (event, args) => {
    console.info("reloading page")
    win.reload();
});

ipcMain.on("request-path", (event, args) => {
    win.webContents.send("recieve-path", app.getAppPath());
});
