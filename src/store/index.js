import { createStore } from 'vuex'
import { pizza } from './menuStore'
import { checkout } from './checkoutStore'

export default createStore({
  strict: true,
  state: {
    isAuth: false,
    orders: [],
    totalCount: 0,
    modalInfo: [{ id: '', name: '', body: '', price: '', photo: '', count: '' }]
  },
  modules: {
    post: pizza, checkout
  },
  getters: {
    getOrderById: (state) => (id) => {
      return state.orders.find(order => order.id === id)
    },
    order: state => {
      const obj = {}
      state.orders.filter(order => order.count > 0).forEach((i) => {
        obj[i.name] = { id: i.id, count: i.count, price: i.price }
      })
      return obj
    }
  },
  mutations: {
    addPizza (state, pzz) {
      let added = false
      let plusOrMinus = 1
      let priceCounter = pzz.price

      if (event.target.classList.contains('removeItem')) {
        plusOrMinus = -1
        priceCounter = -pzz.price
      }
      state.orders.forEach((i) => {
        if (pzz.id === i.id) {
          if (plusOrMinus > 0 || i.count > 0) {
            i.count += plusOrMinus
            state.totalCount += priceCounter
            added = true
          }
        }
      })
      if (!added && plusOrMinus > 0) {
        state.orders.push({ id: pzz.id, name: pzz.name, body: pzz.body, price: pzz.price, photo: pzz.photo, count: 1 })
        state.totalCount += pzz.price
      }
    },
    setModalInfo (state, pzz) {
      const modalSelector = document.getElementById('myModal')
      const button = document.getElementsByClassName('close')
      const inf = { id: pzz.id, name: pzz.name, body: pzz.body, price: pzz.price, photo: pzz.photo }

      if (modalSelector.style.display === '') {
        modalSelector.style.display = 'block'
        document.body.style.overflow = 'hidden'
        // document.body.style.paddingRight = '0 !important'
      }

      if ((event.target === modalSelector) || (event.target === button[0])) {
        modalSelector.style.display = ''
        document.body.style.overflow = ''
      } else if (state.modalInfo.length === 1) {
        state.modalInfo.splice(0, 1, inf)
      } else {
        state.modalInfo.push(inf)
      }
    },
    sendOrder (state, orderDetails) {
      console.log('Sending order', orderDetails)
    }
  }
})
