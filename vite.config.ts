import { defineConfig } from 'vite';

export default defineConfig({
  // must match the repo name
  base: '/planner-fit/',
  build: {
    // Vite will output the built site here
    outDir: 'docs',
  },
});