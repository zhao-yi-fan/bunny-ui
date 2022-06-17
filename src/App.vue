<template>
  <div id="app">
    <bn-button></bn-button>
    <bn-button-group></bn-button-group>
    <bn-icon></bn-icon>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  mounted () {
    this.$message.info({
      message: "我很帅",
      duration: 3000
    })
  }
}
</script>

<style lang="scss">
</style>
