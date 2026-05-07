# Message

<p class="lead">全局消息提示插件，内置信息、成功、警告和错误四种状态。</p>

<DemoFrame demo="message" title="Message 示例" :height="220" />

## 用法

```js
this.$message.info('Info message')
this.$message.success('Success message')
this.$message.warn('Warning message')
this.$message.error('Error message')
```

执行 `Vue.use(BunnyUI)` 时会自动安装消息插件。
