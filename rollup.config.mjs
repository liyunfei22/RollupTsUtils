import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const packageName = 'rollup-ts-utils';
const isProduction = !process.env.ROLLUP_WATCH;

const baseConfig = {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
    }),
  ],
};

export default [
  {
    ...baseConfig,
    output: [
      {
        file: 'dist/index.js',
        sourcemap: true,
        format: 'cjs',
      },
      {
        file: 'dist/index.esm.js',
        sourcemap: true,
        format: 'es',
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        sourcemap: true,
        name: packageName,
        globals: {
          // 如果你的库依赖其他全局变量，在这里定义它们
        },
      },
    ],
    plugins: [...baseConfig.plugins, isProduction && terser()].filter(Boolean),
  },
  // TypeScript declaration file
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
].filter(Boolean);