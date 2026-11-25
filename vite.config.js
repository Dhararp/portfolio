import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

try {
  const newResumePath = path.resolve(__dirname, 'public/resume-1.pdf')
  if (fs.existsSync(newResumePath)) {
    const newResumeBuffer = fs.readFileSync(newResumePath)
    
    // Synchronously keep Resume.pdf, resume.pdf, and dist copies synced with resume-1.pdf
    fs.writeFileSync(path.resolve(__dirname, 'public/Resume.pdf'), newResumeBuffer)
    fs.writeFileSync(path.resolve(__dirname, 'public/resume.pdf'), newResumeBuffer)
    
    const distDir = path.resolve(__dirname, 'dist')
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true })
    }
    fs.writeFileSync(path.resolve(__dirname, 'dist/resume-1.pdf'), newResumeBuffer)
    fs.writeFileSync(path.resolve(__dirname, 'dist/Resume.pdf'), newResumeBuffer)
    fs.writeFileSync(path.resolve(__dirname, 'dist/resume.pdf'), newResumeBuffer)
    console.log('[Resume Sync] Successfully synced resume-1.pdf across public and dist')
  }
} catch (e) {
  console.error('[Resume Sync Error]', e)
}

export default defineConfig({
  plugins: [react()],
  base: './',
})
