<template>
  <div class="menu album py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <menu-item
          v-for="pzz in $store.state.post.pizzaMenu"
          :pzz="pzz"
          :key="pzz.id"
        >
        </menu-item>
      </div>
    </div>
  </div>
</template>

<script>
//  bg-light
export default {
  name: 'my-menu',
  methods: {
  }
}

</script>
<style scoped>
.py-5{
  padding-bottom: 0!important;
}
</style>
