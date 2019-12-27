<template>
  <div id="app" class="wrapper">
    <Header />
    <div class="app-container">
      <component v-if="component" :is="component" />
      <router-view v-else />
    </div>
    <!-- ADD FOOTER COMPONENT HERE -->
  </div>
</template>

<script>
import Homepage from '@/views/Home'
import Header from '@/components/HeaderComponent'

export default {
  name: 'app',
  components: {
    Homepage,
    Header,
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
