import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  blockDomain: async (domain: string) => {
    return ipcRenderer.invoke('blockDomain', domain);
  },
});
