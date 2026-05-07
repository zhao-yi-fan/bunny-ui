<template>
  <span
    class="bn-icon"
    :class="{ 'is-spin': spin }"
    :style="iconStyle"
    role="img"
    aria-hidden="true"
    v-html="iconMarkup"
  ></span>
</template>

<script>
import icons from './icons'

export default {
  name: 'BnIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 16
    },
    color: {
      type: String,
      default: ''
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconMarkup () {
      const path = icons[this.name] || icons.info
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
    },
    iconStyle () {
      const size = typeof this.size === 'number' ? `${this.size}px` : this.size
      return {
        width: size,
        height: size,
        color: this.color || 'currentColor'
      }
    }
  }
}
</script>

<style>
</style>
