<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  name: 'App',
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
