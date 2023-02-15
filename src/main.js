import { LIB_NAME } from './configs/subApp'
import { libReady, isMasterApp } from 'hel-lib-proxy'

async function main() {
  if (isMasterApp()) {
    await import('./loadApp')
  } else {
    const libProperties = await import('./entrance/libProperties')
    // 注意此处传递的是 default
    console.log('libProperties.default:', libProperties.default)
    libReady(LIB_NAME, libProperties.default)

    console.log('libReady:', libReady(LIB_NAME, libProperties.default))
  }
}

main().catch(console.error)
