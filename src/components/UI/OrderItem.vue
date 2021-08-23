<template>
  <transition name="mode-fade" mode="out-in">
    <div v-if="orderedItem.count > 0">
      <ol class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-start"
        >
        <div class="row">
          <div class="col-4">
            <img class="w-100" :src=orderedItem.photo>
          </div>
          <div class="col-8 col-sm-5">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ orderedItem.name }}</div>
              {{ orderedItem.price }}$
              <div>{{ orderedItem.body }}</div>
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div style="display: inline-flex">
              <button type="button"
                class="btn btn-primary btn-circle removeItem"
                @click="$store.commit('addPizza', orderedItem)">
                <i class="fas fa-minus removeItem"></i>
              </button>
              <p>{{ orderedItem.count }}</p>
              <button type="button"
                class="btn btn-primary btn-circle"
                @click="$store.commit('addPizza', orderedItem)">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        </li>
      </ol>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'order-item',
  props: {
    orderedItem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
p{
  margin: 5px;
}
.mode-fade-enter-active, .mode-fade-leave-active {
  transition: opacity .5s ease
}
.mode-fade-enter-from, .mode-fade-leave-to {
  opacity: 0
}
</style>
