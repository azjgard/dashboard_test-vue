<template>
  <div id="app">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 25px 0 325px;
  max-width: 1100px;
}
</style>
