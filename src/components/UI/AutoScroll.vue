
<template>
  <div>
  </div>
</template>
<script>
export default {
  name: 'autoscroll',
  mounted () {
    const hash = document.location.hash
    if (hash) {
      const i = hash.slice(1)
      const el = document.querySelector(`.${i}`)
      el && window.scrollTo(0, el.offsetTop)
    }
  }
}
</script>

<style>
</style>
