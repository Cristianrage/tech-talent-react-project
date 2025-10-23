import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Si tu repositorio se llama 'tech-talent-react-project'
const repoName = 'tech-talent-react-project'; 

export default defineConfig({
  // **AÑADIR ESTA LÍNEA**
  base: `/${repoName}/`, 
  plugins: [react()],
});