<template>
  <div class="playground">
    <div class="playground__row">
      <bn-button type="primary" @click="showMessage">Primary</bn-button>
      <bn-button-group>
        <bn-button>Left</bn-button>
        <bn-button>Center</bn-button>
        <bn-button>Right</bn-button>
      </bn-button-group>
      <bn-input v-model="keyword" placeholder="Playground input" clearable></bn-input>
    </div>

    <div class="playground__row">
      <bn-tag closable @close="handleTagClose">Tag</bn-tag>
      <bn-divider content-position="left">Preview</bn-divider>
      <bn-watermark content="Bunny UI">
        <div class="playground__card">Component playground</div>
      </bn-watermark>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    showMessage () {
      this.$message.success('Playground ready')
    },
    handleTagClose () {
      this.$message.info('Tag closed')
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f5f7fb;
  color: #1f2937;
}

.playground {
  min-height: 100vh;
  padding: 48px;
  box-sizing: border-box;
}

.playground__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.playground__card {
  min-width: 320px;
  padding: 32px;
  border-radius: 12px;
  background: rgba(255, 255, 255, .88);
  box-shadow: 0 12px 32px rgba(15, 23, 42, .08);
  text-align: center;
}
</style>
