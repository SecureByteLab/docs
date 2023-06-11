import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: "https://docs.securebyte.zip",
  integrations: [
    starlight({
      title: "SecureByte Docs",
      social: {
        github: 'https://github.com/securebytelab',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Example', link: '/get-started/example/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
