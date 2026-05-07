<template>
  <label class="bn-input" :class="classes">
    <span v-if="prefixIcon" class="bn-input__icon">
      <bn-icon :name="prefixIcon" :size="16"></bn-icon>
    </span>
    <input
      ref="input"
      class="bn-input__inner"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @change="handleChange"
    />
    <button
      v-if="showClear"
      class="bn-input__clear"
      type="button"
      @click="clearValue"
    >
      <bn-icon name="close" :size="14"></bn-icon>
    </button>
    <span v-else-if="suffixIcon" class="bn-input__icon">
      <bn-icon :name="suffixIcon" :size="16"></bn-icon>
    </span>
  </label>
</template>

<script>
export default {
  name: 'BnInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return [
        `bn-input--${this.size}`,
        {
          'is-disabled': this.disabled
        }
      ]
    },
    showClear () {
      return this.clearable && !this.disabled && this.value
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    clearValue () {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.focus()
        }
      })
    }
  }
}
</script>

<style>
</style>
