<template>
  <div class="bn-watermark">
    <div class="bn-watermark__content">
      <slot></slot>
    </div>
    <div class="bn-watermark__mask" :style="maskStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'BnWatermark',
  props: {
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    gap: {
      type: Array,
      default: () => [120, 120]
    },
    rotate: {
      type: Number,
      default: -22
    },
    opacity: {
      type: Number,
      default: 0.15
    },
    zIndex: {
      type: Number,
      default: 9
    }
  },
  computed: {
    maskStyle () {
      return {
        backgroundImage: this.image ? `url(${this.image})` : `url("${this.svgToDataUrl(this.svgMarkup)}")`,
        backgroundSize: `${this.gap[0]}px ${this.gap[1]}px`,
        opacity: this.opacity,
        zIndex: this.zIndex
      }
    },
    svgMarkup () {
      const text = this.content || 'Bunny UI'
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${this.gap[0]}" height="${this.gap[1]}">
          <g transform="translate(${this.gap[0] / 2}, ${this.gap[1] / 2}) rotate(${this.rotate})">
            <text
              x="0"
              y="0"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="#111827"
              font-size="16"
              font-family="Arial, sans-serif"
            >${text}</text>
          </g>
        </svg>
      `.trim()
    }
  },
  methods: {
    svgToDataUrl (value) {
      return `data:image/svg+xml;utf8,${encodeURIComponent(value)}`
    }
  }
}
</script>

<style>
</style>
