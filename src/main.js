import Vue from 'vue'
import { preFetchLib, bindVueRuntime } from 'hel-micro'

bindVueRuntime({ Vue })

import { LIB_NAME } from './configs/subApp'
import { libReady, isMasterApp } from 'hel-lib-proxy'

async function main() {
  if (isMasterApp()) {
    // from unpkg by default
  // see https://unpkg.com/hel-tpl-remote-vue-comps@1.1.3/hel_dist/index.html
    // await preFetchLib('lib-zhangbb-test')
    await preFetchLib('lib-zhangbb')

    await import('./loadApp')
  } else {
    const libProperties = await import('./entrance/libProperties')
    libReady(LIB_NAME, libProperties.default)
  }
}

main().catch(console.error)
