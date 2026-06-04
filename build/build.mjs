import * as esbuild from 'esbuild'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

await esbuild.build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.cjs',
  platform: 'node',
  format: 'cjs',
  bundle: true,
  treeShaking: true,
  target: 'node20',
  external: ['fs', 'path', 'os', 'crypto', 'stream', 'http', 'https', 'url', 'util', 'zlib', 'dotenv'],
  define: {
    'process.env.APP_VERSION': JSON.stringify(pkg.version),
  },
}).catch(() => process.exit(1))
