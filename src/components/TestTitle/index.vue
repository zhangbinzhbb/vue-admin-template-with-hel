<template>
  <div>
    test-demo - {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '123'
    }
  }
}
</script>
