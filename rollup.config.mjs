import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';

const packageName = 'rollupTsUtils';
const isProduction = !process.env.ROLLUP_WATCH;

const baseConfig = {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      preventAssignment: true
    })
  ],
};
const devConfig = {
  ...baseConfig,
  output: {
    file: 'dev/bundle.js',
    format: 'iife',
    name: packageName,
    sourcemap: true,
  },
  plugins: [
    ...baseConfig.plugins,
    serve({
      contentBase: ['dev'],
      open: true,
      port: 3000,
    }),
    livereload({
      watch: ['dev'],
    }),
  ],
};
const productionConfig = {
  ...baseConfig,
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      sourcemap: true,
      name: packageName,
      globals: {
        // 如果你的库依赖其他全局变量，在这里定义它们
        '@babel/runtime-corejs3/regenerator': 'regeneratorRuntime',
        '@babel/runtime-corejs3/helpers/asyncToGenerator': 'asyncToGenerator',
        '@babel/runtime-corejs3/core-js-stable/promise': 'Promise',
      },
    },
  ],
  plugins: [...baseConfig.plugins],
}

const dtsConfig =  {
  input: 'src/index.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [dts()],
}

const config = isProduction ? [productionConfig, dtsConfig] : devConfig;

export default config