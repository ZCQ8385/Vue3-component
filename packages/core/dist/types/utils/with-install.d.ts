import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export declare function makeInstaller(component: Plugin[]): Plugin;
export declare function withInstall<T>(comp: T): SFCWithInstall<T>;
export {};
