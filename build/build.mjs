import * as esbuild from 'esbuild'
import {GetDefineObj} from './defineEnv.mjs';

const options = {
  entryPoints: ['./src/index.ts'],
  outfile: './build/bbbot.js',
  platform: 'node',
  bundle: true,
  define: GetDefineObj(),
}

esbuild.build(options).catch(() => process.exit(1))
