<template>
  <div class="app">
    <keep-alive>
      <Navbar></Navbar>
    </keep-alive>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import myFooter from './components/Footer.vue'

export default {
  components: {
    Navbar,
    myFooter
  }
}
</script>

<style>
body{
    background: url(background.png);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
     background-size: 100%;
    min-height: 100vh;
}
.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.mode-fade-enter-active, .mode-fade-leave-active {
  transition: opacity .3s ease
}

.mode-fade-enter-from, .mode-fade-leave-to {
  opacity: 0
}
.btn-circle {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    padding-top: 4px;
    font-size: 16px;
    white-space: normal;
    color: black;
}
</style>
