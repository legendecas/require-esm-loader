import Module from 'node:module';

Module.register(new URL('./loader.js', import.meta.url));
