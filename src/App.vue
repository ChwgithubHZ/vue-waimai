<template>
  <div id="app">
    <FooterGuide v-show="$route.meta.showFooter"/>
    <router-view/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #0c5460
</style>
