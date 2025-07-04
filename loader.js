import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

export async function load(url, context, nextLoad) {
  console.log('Loading:', url);
  if (!url.includes('esm.')) {
    return nextLoad(url, context);
  }
  const content = await fsPromises.readFile(fileURLToPath(url + '.compiled'), 'utf8');
  return {
    format: 'module',
    source: content,
    shortCircuit: true,
  };
}
