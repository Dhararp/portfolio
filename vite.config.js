import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

try {
  const newResumePath = path.resolve(__dirname, 'public/Resume.pdf')
  if (fs.existsSync(newResumePath)) {
    const newResumeBuffer = fs.readFileSync(newResumePath)
    
    // Force overwrite all copies (lowercase and uppercase in public and dist) with 1-page Resume.pdf buffer
    fs.writeFileSync(path.resolve(__dirname, 'public/resume.pdf'), newResumeBuffer)
    
    const distDir = path.resolve(__dirname, 'dist')
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true })
    }
    fs.writeFileSync(path.resolve(__dirname, 'dist/Resume.pdf'), newResumeBuffer)
    fs.writeFileSync(path.resolve(__dirname, 'dist/resume.pdf'), newResumeBuffer)
    console.log('[Resume Sync] Successfully overwrote all resume files with 1-page Resume.pdf (67.8 KB)')
  }
} catch (e) {
  console.error('[Resume Sync Error]', e)
}

export default defineConfig({
  plugins: [react()],
  base: './',
})
