<template>
  <div class="cart-content">
    <transition name="mode-fade" mode="out-in">
      <h2 v-if="$store.state.totalCount > 0">Order List</h2>
      <h2 v-else>Order List is empty</h2>
    </transition>
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-12 col-md-8 col-xs-12">
          <hr class="bg-danger border-2 border-top border-dark">
          <order-item
              v-for="orderedItem in $store.state.orders"
              :orderedItem="orderedItem"
              :key="orderedItem.id"
              >
          </order-item>
          <transition name="mode-fade" mode="out-in">
            <div v-show="$store.state.totalCount !== 0">
              <hr class="bg-danger border-2 border-top border-dark">
              <h2>Total count: {{ $store.state.totalCount }} $</h2>
              <hr class="bg-danger border-2 border-top border-dark">
              <checkout></checkout>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="img">
      <img src='../assets/logo.png' alt="" style="width: 60%"/>
    </div>
  </div>
</template>

<script>

import Checkout from '../components/Checkout.vue'

export default {
  components: {
    Checkout
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
<style scoped>
.bg-gradient{
  background-color: white;
}
h2{
  margin-top: 1%;
  text-align: center;
}
.img{
  text-align: center;
}
.cart-content{
  flex: 1 0 auto;
}
</style>
