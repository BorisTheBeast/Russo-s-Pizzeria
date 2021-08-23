<template>
  <div>
    <Main></Main>
    <!-- <About></About> -->
    <keep-alive>
      <Menu></Menu>
    </keep-alive>
    <info-modal></info-modal>
    <autoscroll></autoscroll>
  </div>
</template>
<script>

import Main from '../components/Main.vue'
// import About from '../components/About.vue'
import Menu from '../components/Menu.vue'
import InfoModal from '../components/InfoModal.vue'

export default {
  components: {
    Main,
    // About,
    Menu,
    InfoModal
  }
}
</script>
<style>
</style>
