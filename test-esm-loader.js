import Module from 'node:module';

const require = Module.createRequire(import.meta.url);
try {
  require('./esm.ts');
} catch (e) {
  console.error('Error loading esm.ts:', e.message);
}

try {
  require('./esm.js');
} catch (e) {
  console.error('Error loading esm.js:', e.message);
}
