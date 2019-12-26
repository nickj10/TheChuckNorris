<template>
  <div id="app" class="wrapper">
    <!-- ADD HEADER COMPONENT HERE-->
    <div class="app-container">
      <component v-if="component" :is="component" />
      <router-view v-else />
    </div>
    <!-- ADD FOOTER COMPONENT HERE -->
  </div>
</template>

<script>
import Homepage from '@/views/Home'

export default {
  name: 'app',
  components: {
    Homepage,
  },
  metaInfo() {
    return {
      titleTemplate: title =>
        title ? `${title} | The Chuck Norris` : `The Chuck Norris`,
    }
  },
  data() {
    return {
      component: false,
    }
  },
  watch: {
    $route: 'onRouteChange',
  },
  methods: {
    onRouteChange() {
      this.component = false;
    },
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
