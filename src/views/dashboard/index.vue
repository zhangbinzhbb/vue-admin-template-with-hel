<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>

    <div style="border: 1px solid #ccc;">
      <p>vue 远程组件</p>
      <!-- <HelloRemoteVueComp label="hi remote comp" /> -->
      <!-- <TestTitle /> -->
      <TestTitle name="测试123" />

      <!-- <RemoteComp1 /> -->
      <Num />
      <RemoteComp name="子应用传入-loaded in codesandbox" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { TestTitle } from 'lib-zhangbb-test'
// import comps1 from 'lib-zhangbb-test'
import comps from 'hel-tpl-remote-vue-comps-demo'
import comps1 from 'hel-tpl-l-vue-comps'
// console.log('comps1==>', comps1)
console.log('comps===>', comps)
import { preFetchLib } from 'hel-micro'
export default {
  name: 'Dashboard',
  components: {
    // TestTitle,
    TestTitle: async() => {
      const comps = await preFetchLib('lib-zhangbb-test', { skip404Sniff: true })
      return comps.TestTitle
    },
    // RemoteComp1:  comps1.TestTitle,
    RemoteComp: comps.HelloWorld,
    Num: comps1.Num
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
