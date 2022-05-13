<template>
  <section class="container">
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: 'appMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
