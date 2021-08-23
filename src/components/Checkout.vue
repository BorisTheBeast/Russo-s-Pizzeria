<template>
  <div class="checkout-form">
    <h2>Order address</h2>
    <form class="forms">
      <div id="autocomplete-area">
        <table>
          <tbody>
            <tr v-for="street in objKeys" :key="street">
              <th class="cursor"
                @click="loadLocal"
                :id="street"
                >
                {{ getByID(`${street}`).street }}, {{ getByID(`${street}`).house }} - {{ getByID(`${street}`).flat }}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="name">First and last name</span>
        </div>
        <input type="text" class="xl-form form-control" ref="name">
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="phone">Phone number</span>
        </div>
        <input type="number" class="xl-form form-control" value="+375" ref="phone">
        <span class="input-group-text">Example: +375 29 123 45 67</span>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="street">Street</span>
        </div>
        <input
          type="text"
          class="s-form form-control"
          ref="street"
        >
        <div class="input-group-prepend">
          <span class="input-group-text" id="house">House</span>
        </div>
        <input type="number" class="s-form form-control" ref="house">

        <div class="input-group-prepend">
          <span class="input-group-text" id="flat">Flat</span>
        </div>
        <input type="number" class="s-form form-control" ref="flat">

      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="entrance">Entrance</span>
        </div>
        <input type="number" class="s-form form-control" ref="entrance">

        <div class="input-group-prepend">
          <span class="input-group-text" id="floor">Floor</span>
        </div>
        <input type="number" class="s-form form-control" ref="floor">

        <div class="input-group-prepend">
          <span class="input-group-text" id="intercom">Intercom</span>
        </div>
        <input type="text" class="s-form form-control" ref="intercom">

      </div>
    </form>
  </div>
  <div class="confirm">
    <button class="confirm-button" type="button" @click="sendOrder">
      <span class="txt">В корзину</span><span class="ico"></span>
    </button>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'checkout',
  store,
  data () {
    return {
      firstName: '',
      objKeys: Object.keys(localStorage)
    }
  },
  methods: {
    sendOrder () {
      const orderDetails = { }
      let isValid = true
      const a = 'orderList'
      console.log(store.getters.order)
      for (const [key, input] of Object.entries(this.$refs)) {
        orderDetails[key] = input.value
        if (!input.value) isValid = false
      }
      localStorage.setItem(orderDetails.street, JSON.stringify(orderDetails))
      orderDetails[a] = store.getters.order
      isValid && this.$store.commit('sendOrder', orderDetails)
    },
    loadLocal () {
      for (const [key, input] of Object.entries(this.$refs)) {
        input.value = JSON.parse(localStorage.getItem(event.target.id))[key]
      }
      console.log(event.target)
    }
  },
  computed: {
    getByID () {
      return id => JSON.parse(localStorage.getItem(id))
    }
  }
}
</script>

<style scoped>
.checkout-form{
  display: flex;
  flex-direction: column;
}
.xl-form{
  width: 150px;
}
.s-form{
  width: 60px;
}
.confirm-button{
  cursor: pointer;
  cursor: hand;
  display: inline-block;
  color: #fff;
  font: 32px/1 Malina,sans-serif;
  letter-spacing: -1px;
  -webkit-text-stroke: 1px transparent;
  -webkit-font-smoothing: antialiased;
  background-color: #198754;
  -webkit-border-radius: 10px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 10px;
  -moz-background-clip: padding;
  border-radius: 10px;
  background-clip: padding-box;
  padding: 14px 0;
  width: 180px;
  text-align: center;
}
.confirm-button:hover{
  transform: scale(1.1)
}
.confirm{
  text-align: end;
  padding: 3%;
}
h2{
  text-align: center;
}
#autocomplete-area {
  position: block;
  top: 39px;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 5px;
  padding: 5px;
}
th {
  padding: 3px;
}
th:hover {
  background-color: #e9ecef;
}
.cursor {
  cursor: pointer;
}
</style>
