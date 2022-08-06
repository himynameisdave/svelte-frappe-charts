import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

const name = pkg.name
  // .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase()); // > SvelteFrappeCharts


export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      'format': 'es'
    },
    {
      file: pkg.main,
      'format': 'umd',
      name
    }
  ],
  plugins: [
    svelte(),
    resolve({
      dedupe: ['svelte']
    }),
    commonjs(),
    typescript()
  ]
};
