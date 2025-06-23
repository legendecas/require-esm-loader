import Module from 'node:module';
import * as hooks from './loader-sync.js';

Module.registerHooks(hooks);
