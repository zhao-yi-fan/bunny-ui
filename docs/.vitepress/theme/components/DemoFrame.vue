<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  demo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  height: {
    type: Number,
    default: 280
  }
})

const frameSrc = computed(() => withBase(`/demos/${props.demo}.html`))
</script>

<template>
  <div class="demo-frame">
    <iframe
      class="demo-frame__iframe"
      :title="title || demo"
      :src="frameSrc"
      :style="{ height: `${height}px` }"
      loading="lazy"
    ></iframe>
  </div>
</template>
