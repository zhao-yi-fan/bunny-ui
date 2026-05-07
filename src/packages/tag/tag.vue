<template>
  <span class="bn-tag" :class="classes">
    <slot></slot>
    <button v-if="closable" class="bn-tag__close" type="button" @click="$emit('close')">
      <bn-icon name="close" :size="12"></bn-icon>
    </button>
  </span>
</template>

<script>
export default {
  name: 'BnTag',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'success', 'warning', 'danger', 'info'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `bn-tag--${this.type}`,
        `bn-tag--${this.size}`,
        { 'is-closable': this.closable }
      ]
    }
  }
}
</script>

<style>
</style>
