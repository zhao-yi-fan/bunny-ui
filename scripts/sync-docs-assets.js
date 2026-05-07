const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const sourceDir = path.join(rootDir, 'dist')
const targetDir = path.join(rootDir, 'docs', 'public', 'dist')

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Library build output not found: ${sourceDir}`)
}

fs.rmSync(targetDir, { recursive: true, force: true })
fs.mkdirSync(path.dirname(targetDir), { recursive: true })
fs.cpSync(sourceDir, targetDir, { recursive: true })
