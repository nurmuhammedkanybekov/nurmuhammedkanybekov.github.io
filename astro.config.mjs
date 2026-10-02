import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// Keep /notes/ out of the sitemap until there is a published post (files starting with "_" are templates).
const notesDir = join(process.cwd(), 'src', 'content', 'notes');
const hasNotes = existsSync(notesDir) && readdirSync(notesDir).some((f) => f.endsWith('.md') && !f.startsWith('_'));

export default defineConfig({
  site: 'https://nurmuhammedkanybekov.github.io',
  integrations: [sitemap({ filter: (page) => hasNotes || !new URL(page).pathname.startsWith('/notes') })],
  build: { inlineStylesheets: 'always' },
});
