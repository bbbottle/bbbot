import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./src/worker.ts'],
  outfile: './build/worker.js',
  platform: 'neutral',
  format: 'esm',
  bundle: true,
  treeShaking: true,
  target: 'es2022',
  external: ['cloudflare:workers'],
}).catch(() => process.exit(1))
