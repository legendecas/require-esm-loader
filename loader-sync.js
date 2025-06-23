import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export function load(url, context, nextLoad) {
  console.log('Loading sync:', url);
  if (!url.includes('esm.')) {
    return nextLoad(url, context);
  }
  const content = fs.readFileSync(fileURLToPath(url + '.compiled'), 'utf8');
  return {
    format: 'module',
    source: content,
    shortCircuit: true,
  };
}
