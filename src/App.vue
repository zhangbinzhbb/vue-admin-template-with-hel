<template>
  <div id="app">
    <Hamburger />
    <router-view />

  </div>
</template>

<script>
import { Hamburger } from 'lib-zhangbb-test'
export default {
  name: 'App',
  components: {
    Hamburger
  }
}
</script>
