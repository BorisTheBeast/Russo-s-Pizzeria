<template>
  <button type="button" class="btn btn-sm btn-outline-secondary">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'my-button'
}

</script>

<style>
.btn{
  background-color: #e9ecef;
  height: 100%;
  width: 20%;
}
</style>
