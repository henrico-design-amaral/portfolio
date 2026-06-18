import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://portfolio.henrico.works',
  integrations: [mdx()],
  output: 'static',
});
