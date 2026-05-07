<template>
  <transition name="bn-dialog-fade">
    <div v-if="visible" class="bn-dialog__wrapper" @click.self="handleWrapperClick">
      <div class="bn-dialog" role="dialog" aria-modal="true">
        <div class="bn-dialog__header">
          <span class="bn-dialog__title">{{ title }}</span>
          <button class="bn-dialog__close" type="button" @click="closeDialog">
            <bn-icon name="close" :size="16"></bn-icon>
          </button>
        </div>
        <div class="bn-dialog__body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="bn-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BnDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible (value) {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = value ? 'hidden' : ''
      }

      if (value) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    }
  },
  mounted () {
    if (this.visible && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.handleKeydown)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  },
  methods: {
    closeDialog () {
      this.$emit('update:visible', false)
    },
    handleWrapperClick () {
      if (this.closeOnClickModal) {
        this.closeDialog()
      }
    },
    handleKeydown (event) {
      if (event.key === 'Escape' && this.visible && this.closeOnPressEscape) {
        this.closeDialog()
      }
    }
  }
}
</script>

<style>
</style>
