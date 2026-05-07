<template>
  <div class="bn-button-group" :class="classes" role="group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BnButtonGroup',
  props: {
    size: {
      type: String,
      default: '',
      validator: value => ['', 'small', 'medium', 'large'].includes(value)
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      bnButtonGroup: this
    }
  },
  computed: {
    classes () {
      return {
        [`bn-button-group--${this.size}`]: this.size,
        'is-vertical': this.vertical
      }
    }
  }
}
</script>

<style>
</style>
