<template>
  <HeaderView />
  <router-view />
</template>

<script>
import HeaderView from './components/HeaderView.vue'
export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script>

<style lang="scss">
</style>
