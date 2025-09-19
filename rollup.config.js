import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';


const name = pkg.name
  // .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase()); // > SvelteFrappeCharts


export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      'format': 'es'
    },
    {
      file: pkg.main,
      'format': 'umd',
      name,
      globals: {
        'svelte': 'svelte',
        'frappe-charts': 'frappeCharts'
      }
    }
  ],
  external: ['svelte', 'frappe-charts'],
  plugins: [
    svelte({
      preprocess: sveltePreprocess()
    }),
    resolve({
      dedupe: ['svelte'],
      exportConditions: ['svelte']
    }),
    commonjs(),
    typescript({
      sourceMap: true,
      tsconfig: './tsconfig.json'
    })
  ]
};
