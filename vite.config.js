import { xink } from '@xinkjs/xink'
import { defineConfig } from 'vite'

export default defineConfig(async function () {
  return {
    plugins: [
      await xink({ runtime: 'bun' })
    ]
  }
})
