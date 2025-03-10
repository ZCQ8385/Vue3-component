import { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

// 此函数app.use()的参数是一个插件，所以我们需要将组件转换为插件
export function makeInstaller(component: Plugin[]) {
  // 定义一个安装器函数，接受一个 Vue 应用实例作为参数
  const installer = (app: App) => each(component, c => app.use(c))

  // 返回安装器函数，并将其类型断言为 Plugin
  return installer as Plugin
}

export function withInstall<T>(comp: T) {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const { name } = comp as unknown as { name: string }
    app.component(name, comp as Plugin)
  }
  return comp as SFCWithInstall<T>
}
