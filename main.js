const { app, BrowserWindow } = require('electron')
const path = require('path')

app.disableHardwareAcceleration()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
	frame: false,
	transparent:true,
    webPreferences: {
      preload: path.join(__dirname, './src/preload.js')
    }
  })

  win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
