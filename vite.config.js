import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/poothathan/bmi_calc.git',  // Replace with your actual GitHub repo name, e.g., '/ecom/'
})
