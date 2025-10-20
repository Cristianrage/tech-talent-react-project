import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🚨 ¡IMPORTANTE! Agrega la propiedad 'base' con el nombre de tu repositorio
  // Reemplaza 'nombre-de-tu-repositorio' por el nombre real de tu repo en GitHub.
  base: 'tech-talent-react-project', 
})
