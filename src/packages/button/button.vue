<template>
  <button
    class="bn-button"
    :class="classes"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="bn-button__loading"></span>
    <span class="bn-button__content">
      <slot>按钮</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'BnButton',
  inject: {
    bnButtonGroup: {
      default: null
    }
  },
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const size = this.bnButtonGroup && this.bnButtonGroup.size ? this.bnButtonGroup.size : this.size
      return [
        `bn-button--${this.type}`,
        `bn-button--${size}`,
        {
          'is-disabled': this.disabled,
          'is-loading': this.loading,
          'is-grouped': Boolean(this.bnButtonGroup)
        }
      ]
    }
  },
  methods: {
    handleClick (event) {
      if (this.disabled || this.loading) return
      this.$emit('click', event)
    }
  }
}
</script>

<style>

</style>
