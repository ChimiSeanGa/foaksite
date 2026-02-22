// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
      react(),
      icon(),
      sanity({
        projectId: '0k7xpj4i', // Replace with your actual project ID
        dataset: 'production', // Or your specific dataset name
        useCdn: true,
      }),
  ],
  output: "static",
});