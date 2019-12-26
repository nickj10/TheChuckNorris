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

<style lang="scss" src="../static/_styles.scss"></style>
