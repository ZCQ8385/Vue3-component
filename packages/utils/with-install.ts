import { App, Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const { name } = (comp as unknown) as { name: string };
    app.component(name, comp as Plugin);
  };
  return comp as SFCWithInstall<T>;
}