import { app, BrowserWindow, ipcMain } from 'electron';
import sudo from 'sudo-prompt';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      disableHtmlFullscreenWindowResize: true,
    },
  });

  mainWindow.removeMenu();
  mainWindow.setMaximizable(false);

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('blockDomain', async (_, domain: string) => {
  const options = {
    name: 'REDPILL',
  };

  return new Promise(function (res, rej) {
    sudo.exec(
      `${process.resourcesPath}\\extraResources\\hostile.exe set 127.0.0.1 ${domain}`,
      options,
      function (error: any, stdout: any, oerrr: any) {
        if (error || oerrr) rej(error);
        res(stdout);
      }
    );
  });
});
