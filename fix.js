import fs from 'fs';

// 1. Restore standard Vite Config (Clean slate)
const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`;

// 2. Create the PostCSS config (The missing piece)
const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

// 3. Create the Tailwind config (Defining the content paths)
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

// 4. Reset the CSS file to just the directives
const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

console.log("Writing config files...");
fs.writeFileSync('vite.config.js', viteConfig);
fs.writeFileSync('postcss.config.js', postcssConfig);
fs.writeFileSync('tailwind.config.js', tailwindConfig);
fs.writeFileSync('src/index.css', cssContent);
console.log("✅ Files fixed! You can now run 'npm run dev'");