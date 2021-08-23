<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <a class="col-12" href="#">
        <img class="bd-placeholder-img card-img-top" src="../assets/MainLogo.png" alt="">
      </a>
    </div>
  </nav>
      <div
        v-intersection="toggleHeader"
        >
      </div>
      <div
        class="button__panel"
        v-bind:class="{'fixed-top': !canChangeHeader}"
        >
          <my-button @click="$router.push('/#main'); goTo('main')">Home</my-button>
          <my-button @click="$router.push('/#menu'); goTo('menu')">Menu</my-button>
          <my-button @click="$router.push('/#process'); goTo('process')">Process</my-button>
          <my-button @click="$router.push('/#about'); goTo('about')">About</my-button>
          <my-button @click="$router.push('/cart')">
            <i class="fas fa-shopping-cart fa-2x"></i>
            <p v-if="$store.state.totalCount > 0">{{ $store.state.totalCount  }}$</p>
          </my-button>
      </div>
      <div v-bind:class="{'button__panel': !canChangeHeader}"></div>
</template>

<script>
export default {
  name: 'my-navbar',
  data () {
    return {
      offset: window.top.scrollY,
      canChangeHeader: false
    }
  },
  methods: {
    goTo (className) {
      const el = document.querySelector(`.${className}`)
      if (el !== null) {
        el && window.scrollTo(0, el.offsetTop)
      }
    },
    toggleHeader () {
      if (window.top.scrollY > document.querySelector('.navbar').offsetHeight) {
        this.canChangeHeader = false
      } else {
        this.canChangeHeader = true
      }
    }
  }
}
</script>

<style scoped>
.navbar{
  flex-direction: column
}
.bg-light {
    background-color: #198754!important;
}
.button__panel {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
}
.cartBtn{
  padding: 7px;
  color: #000000!important;
}
.cartBtn:hover{
  transform: scale(1.2)
}
p{
  margin-top: -5px;
}
</style>
