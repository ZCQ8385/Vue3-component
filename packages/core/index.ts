import { makeInstaller } from '@zi-shui/utils'
import components from './components'
import '@zi-shui/theme-chalk/src/index.scss'

const installer = makeInstaller(components)

// export * from '@toy-element/components'
export default installer
