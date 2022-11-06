import electron from 'electron';
type API = {
  blockDomain(domain: string): Promise<any>;
};
declare global {
  interface Window {
    api: API;
  }
}
