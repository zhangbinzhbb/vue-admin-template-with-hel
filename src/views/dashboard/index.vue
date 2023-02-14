<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <Hamburger />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Hamburger } from 'lib-zhangbb'
export default {
  name: 'Dashboard',
  components: {
    Hamburger
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
