import Module from 'node:module';

const require = Module.createRequire(import.meta.url);

require('cjs-only');
try {
  require('esm-only');
} catch (e) {
  console.error('Error loading esm-only:', e.message);
}

await import('esm-only');
try {
  await import('cjs-only');
} catch (e) {
  console.error('Error import cjs-only:', e.message);
}

await import('module-sync');
require('module-sync');
