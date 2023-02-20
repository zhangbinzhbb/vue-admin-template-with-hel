import Vue from 'vue'
import { preFetchLib, bindVueRuntime } from 'hel-micro'

bindVueRuntime({ Vue })

import { LIB_NAME } from './configs/subApp'
import { libReady, isMasterApp } from 'hel-lib-proxy'

async function main() {
  if (isMasterApp()) {
    // from unpkg by default
    // see https://unpkg.com/hel-tpl-remote-vue-comps@1.1.3/hel_dist/index.html

    // https://github.com/tnfe/hel/issues/23
    // await preFetchLib('lib-zhangbb-test', { skip404Sniff: true })
    await preFetchLib('hel-tpl-remote-vue-comps-demo', { skip404Sniff: true })
    // await preFetchLib('hel-tpl-l-vue-comps')
    // await preFetchLib('lib-zhangbb')

    await import('./loadApp')
  } else {
    const libProperties = await import('./entrance/libProperties')

    console.log('======123=====')
    // 注意此处传递的是 default
    console.log('libProperties.default:', libProperties.default)
    libReady(LIB_NAME, libProperties.default)

    console.log('libReady:', libReady(LIB_NAME, libProperties.default))
  }
}

main().catch(console.error)
