<template>
  <sbc-layout>
    <router-view/>
  </sbc-layout>
</template>

<script>
import Vue from 'vue'
import SbcLayout from '@/components/SbcLayout.vue'
export default Vue.extend({
  name: 'app',
  components: {
    SbcLayout
  }
})
</script>

<style lang="stylus">
  @import "./assets/styl/base.styl";
  @import "./assets/styl/overrides.styl";
</style>