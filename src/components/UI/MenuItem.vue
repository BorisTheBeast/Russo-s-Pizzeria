<template>
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top lazy"
        ref='image'
        @click="$store.commit('setModalInfo', pzz)"
        >
      <div class="card-body">
        <h4>{{ pzz.name }}</h4>
        <p class="card-text" style="padding-bottom: 15px"> {{ pzz.body }} </p>
        <div class="d-flex justify-content-between align-items-center"
          style="position: absolute; bottom: 3%">
          <div class="btn-group">
            <h6>big size: {{ pzz.price }}$</h6>
            <transition name="mode-fade" mode="out-in">
              <my-button
                v-if="!getOrderById(pzz.id) || (getOrderById(pzz.id).count < 1)"
                @click="$store.commit('addPizza', pzz)">Add to cart</my-button>
              <div class="d-flex"
                v-else>
                <button type="button"
                  class="btn btn-primary btn-circle removeItem"
                  @click="$store.commit('addPizza', pzz)">
                  <i class="fas fa-minus removeItem"></i>
                </button>
                <p class="item-count">{{ getOrderById(pzz.id).count }}</p>
                <button type="button"
                  class="btn btn-primary btn-circle"
                  @click="$store.commit('addPizza', pzz)">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'menu-item',
  props: {
    pzz: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      odrers: state => state.odrers,
      orderId: state => state.orderId
    }),
    ...mapGetters([
      'getOrderById'
    ])
  },
  mounted () {
    const img = this.$refs.image
    img.src = this.pzz.photo
    img.onload = () => {
      img.classList.remove('lazy')
    }
  }
}
</script>

<style scoped>
.card-body{
  position: relative;
}
.card{
  height: 100%;
}
.card:hover{
  transform: scale(1.02);
}
.plus-minus {
  display: flex;
}
.item-count{
  margin: 5px;
}
img {
  opacity: 1;
  transition: opacity 0.3s;
}
img.lazy{
  opacity: 0;
}
.btn-group{
  align-items: flex-end;
}
h6{
  margin-right: 20px;
}
</style>
