<template>
  <div id="app" class="wrapper">
    <Header />
    <div class="app-container">
      <component v-if="component" :is="component" />
      <router-view v-else />
    </div>
    <Footer />
  </div>
</template>

<script>
import Homepage from '@/views/Home'
import Header from '@/components/HeaderComponent'
import Footer from '@/components/FooterComponent'

export default {
  name: 'app',
  components: {
    Homepage,
    Header,
    Footer,
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
