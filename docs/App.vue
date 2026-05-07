<template>
  <div class="docs-app">
    <aside class="docs-sidebar">
      <div class="docs-brand">Bunny UI</div>
      <a
        v-for="item in navItems"
        :key="item.id"
        class="docs-nav-link"
        :href="`#${item.id}`"
      >{{ item.label }}</a>
    </aside>

    <main class="docs-main">
      <section class="docs-hero">
        <div>
          <p class="docs-kicker">Vue 2 Component Library</p>
          <h1>Independent docs for the Bunny UI component set.</h1>
        </div>
        <div class="docs-hero__actions">
          <bn-button type="primary" @click="showDocsMessage">Try Message</bn-button>
          <bn-button>npm install bunny-ui</bn-button>
        </div>
      </section>

      <section id="button-group" class="docs-section">
        <h2>Button Group</h2>
        <p>Group buttons into a compact action cluster.</p>
        <div class="docs-demo">
          <bn-button-group>
            <bn-button type="primary">Prev</bn-button>
            <bn-button type="primary">Current</bn-button>
            <bn-button type="primary">Next</bn-button>
          </bn-button-group>
        </div>
        <div class="docs-demo">
          <bn-button-group vertical size="small">
            <bn-button>North</bn-button>
            <bn-button>Center</bn-button>
            <bn-button>South</bn-button>
          </bn-button-group>
        </div>
        <table class="docs-table">
          <tr><th>Prop</th><th>Description</th></tr>
          <tr><td>size</td><td>Inherit button size inside group.</td></tr>
          <tr><td>vertical</td><td>Stack buttons vertically.</td></tr>
        </table>
      </section>

      <section id="icon" class="docs-section">
        <h2>Icon</h2>
        <p>Lightweight built-in SVG icon wrapper.</p>
        <div class="docs-demo docs-demo--row">
          <bn-icon v-for="name in iconNames" :key="name" :name="name" :size="18"></bn-icon>
          <bn-icon name="warning" color="#f59e0b" spin></bn-icon>
        </div>
        <table class="docs-table">
          <tr><th>Prop</th><th>Description</th></tr>
          <tr><td>name</td><td>Built-in icon name.</td></tr>
          <tr><td>size</td><td>Icon size in px or css length.</td></tr>
          <tr><td>spin</td><td>Continuous rotation animation.</td></tr>
        </table>
      </section>

      <section id="input" class="docs-section">
        <h2>Input</h2>
        <p>Single-line input with icons and clear behavior.</p>
        <div class="docs-demo docs-demo--stack">
          <bn-input v-model="form.keyword" placeholder="Search components" prefix-icon="search" clearable></bn-input>
          <bn-input v-model="form.email" placeholder="Email" suffix-icon="check"></bn-input>
        </div>
        <table class="docs-table">
          <tr><th>Prop</th><th>Description</th></tr>
          <tr><td>value</td><td>Bound input value.</td></tr>
          <tr><td>clearable</td><td>Show a clear button when value exists.</td></tr>
          <tr><td>prefixIcon / suffixIcon</td><td>Decorative icon names.</td></tr>
        </table>
      </section>

      <section id="dialog" class="docs-section">
        <h2>Dialog</h2>
        <p>Modal surface for focused tasks and confirmation.</p>
        <div class="docs-demo">
          <bn-button type="primary" @click="dialogVisible = true">Open dialog</bn-button>
          <bn-dialog :visible.sync="dialogVisible" title="Publish docs">
            The docs application now lives in its own folder and deployment flow.
            <template #footer>
              <bn-button @click="dialogVisible = false">Cancel</bn-button>
              <bn-button type="primary" @click="dialogVisible = false">Confirm</bn-button>
            </template>
          </bn-dialog>
        </div>
        <table class="docs-table">
          <tr><th>Prop</th><th>Description</th></tr>
          <tr><td>visible</td><td>Control dialog visibility.</td></tr>
          <tr><td>closeOnClickModal</td><td>Close when clicking backdrop.</td></tr>
          <tr><td>closeOnPressEscape</td><td>Close on Escape key.</td></tr>
        </table>
      </section>

      <section id="tag" class="docs-section">
        <h2>Tag</h2>
        <p>Status markers and light metadata chips.</p>
        <div class="docs-demo docs-demo--row">
          <bn-tag>Default</bn-tag>
          <bn-tag type="success">Ready</bn-tag>
          <bn-tag type="warning">Pending</bn-tag>
          <bn-tag type="danger" closable @close="showDocsMessage">Closable</bn-tag>
        </div>
      </section>

      <section id="divider" class="docs-section">
        <h2>Divider</h2>
        <p>Separate related content blocks.</p>
        <div class="docs-demo docs-demo--stack">
          <bn-divider>Center</bn-divider>
          <bn-divider content-position="left">Left</bn-divider>
          <bn-divider content-position="right">Right</bn-divider>
        </div>
      </section>

      <section id="watermark" class="docs-section">
        <h2>Watermark</h2>
        <p>Overlay repeated text or image branding on content.</p>
        <bn-watermark content="Bunny UI Docs">
          <div class="docs-watermark-card">
            Internal preview content with a repeated watermark layer.
          </div>
        </bn-watermark>
      </section>

      <section id="message" class="docs-section">
        <h2>Message</h2>
        <p>Imperative feedback plugin with status presets.</p>
        <div class="docs-demo docs-demo--row">
          <bn-button @click="$message.info('Info message')">Info</bn-button>
          <bn-button type="success" @click="$message.success('Success message')">Success</bn-button>
          <bn-button type="warning" @click="$message.warn('Warning message')">Warn</bn-button>
          <bn-button type="danger" @click="$message.error('Error message')">Error</bn-button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DocsApp',
  data () {
    return {
      dialogVisible: false,
      form: {
        keyword: '',
        email: ''
      },
      iconNames: ['search', 'check', 'info', 'warning', 'chevron-left', 'chevron-right'],
      navItems: [
        { id: 'button-group', label: 'Button Group' },
        { id: 'icon', label: 'Icon' },
        { id: 'input', label: 'Input' },
        { id: 'dialog', label: 'Dialog' },
        { id: 'tag', label: 'Tag' },
        { id: 'divider', label: 'Divider' },
        { id: 'watermark', label: 'Watermark' },
        { id: 'message', label: 'Message' }
      ]
    }
  },
  methods: {
    showDocsMessage () {
      this.$message.success('Bunny UI docs action fired')
    }
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(247, 208, 76, .22), transparent 30%),
    linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
  color: #111827;
}

.docs-app {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  min-height: 100vh;
}

.docs-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 32px 20px;
  box-sizing: border-box;
  border-right: 1px solid rgba(148, 163, 184, .22);
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, .55);
}

.docs-brand {
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: 700;
}

.docs-nav-link {
  display: block;
  margin-bottom: 10px;
  color: #475569;
  text-decoration: none;
}

.docs-main {
  padding: 40px;
}

.docs-hero,
.docs-section {
  margin-bottom: 28px;
  padding: 28px;
  border: 1px solid rgba(148, 163, 184, .2);
  border-radius: 18px;
  background: rgba(255, 255, 255, .82);
  box-shadow: 0 20px 40px rgba(15, 23, 42, .06);
}

.docs-kicker {
  margin: 0 0 8px;
  color: #b45309;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.docs-hero h1,
.docs-section h2 {
  margin: 0 0 12px;
}

.docs-hero__actions,
.docs-demo,
.docs-demo--row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.docs-demo--stack {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.docs-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  font-size: 14px;
}

.docs-table th,
.docs-table td {
  padding: 10px 12px;
  border-top: 1px solid #e5e7eb;
  text-align: left;
}

.docs-watermark-card {
  margin-top: 18px;
  padding: 32px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: inset 0 0 0 1px #e5e7eb;
}

@media (max-width: 900px) {
  .docs-app {
    grid-template-columns: 1fr;
  }

  .docs-sidebar {
    position: static;
    height: auto;
  }

  .docs-main {
    padding: 20px;
  }
}
</style>
