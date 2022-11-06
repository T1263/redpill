import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  blockDomain: async (domain: string) => {
    ipcRenderer.invoke('blockDomain', domain);
  },
});
