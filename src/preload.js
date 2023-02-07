// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


const { contextBridge, ipcRenderer} = require('electron');

window.addEventListener("DOMContentLoaded", async() => {
    const version = document.getElementById('version');

    //Notification
    const notification = document.getElementById("notification");
    const message = document.getElementById("message");
    const restartButton = document.getElementById("restart-button");

    ipcRenderer.on("update_available", () => {
        ipcRenderer.removeAllListeners("update_available");
        message.innerText = "A new update is available. Downloading now...";
        notification.classList.remove("hidden");
    });

    ipcRenderer.on("update_downloaded", () => {
        ipcRenderer.removeAllListeners("update_downloaded");
        message.innerText =
            "Update Downloaded. It will be installed on restart. Restart now?";
        restartButton.classList.remove("hidden");
        notification.classList.remove("hidden");
    });

    // version of the app
    ipcRenderer.send("app_version");
    ipcRenderer.on("app_version", (event, arg) => {
        ipcRenderer.removeAllListeners("app_version");
        version.innerText = "Version " + arg.version;
    });
})

contextBridge.exposeInMainWorld("api", {
    
    closeNotification: () => {
    notification.classList.add('hidden');
    },

    restartApp:() => {
    ipcRenderer.send('restart_app');
    }
})

