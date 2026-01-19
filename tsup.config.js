import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/mcp/server.js'],
  outDir: 'dist',
  format: ['cjs'], // Use CommonJS instead of ESM to handle dynamic requires
  target: 'node18',
  platform: 'node',
  bundle: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  shims: false,
  // Bundle all dependencies
  noExternal: [/.*/],
  // Output as .cjs since package.json has "type": "module"
  outExtension() {
    return {
      js: '.cjs',
    };
  },
  esbuildOptions(options) {
    options.mainFields = ['module', 'main'];
    // Mark all Node.js built-ins as external
    options.external = [
      'util',
      'stream',
      'events',
      'buffer',
      'string_decoder',
      'path',
      'fs',
      'crypto',
      'http',
      'https',
      'net',
      'tls',
      'zlib',
      'os',
      'child_process',
      'url',
      'querystring',
      'assert',
      'dns',
      'dgram',
      'readline',
      'repl',
      'tty',
      'vm',
      'module',
      'process',
      'v8',
      'perf_hooks',
      'async_hooks',
      'worker_threads',
      'inspector',
      'cluster',
      'timers',
      'console',
      'punycode',
    ];
  },
});
