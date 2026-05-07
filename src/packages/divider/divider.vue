<template>
  <div class="bn-divider" :class="`is-${contentPosition}`">
    <span v-if="$slots.default" class="bn-divider__text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BnDivider',
  props: {
    contentPosition: {
      type: String,
      default: 'center',
      validator: value => ['left', 'center', 'right'].includes(value)
    }
  }
}
</script>

<style>
</style>
