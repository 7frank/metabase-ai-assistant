import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/mcp/server.js'],
  outDir: 'dist',
  format: ['esm'],
  target: 'node18',
  platform: 'node',
  bundle: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  shims: true,
  // Bundle all dependencies
  noExternal: [/.*/],
  // Preserve the shebang for executable
  banner: {
    js: '#!/usr/bin/env node',
  },
  // Keep the output as index.js
  outExtension() {
    return {
      js: '.js',
    };
  },
  esbuildOptions(options) {
    options.mainFields = ['module', 'main'];
  },
});
