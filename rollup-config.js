import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  entry: './client-aot/app/main.js',
  dest: './public/dist/build.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  external: ['lodash'],
  paths: {
    lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js'
  },
  plugins: [
      nodeResolve({jsnext: true, module: true, preferBuiltins: false}),
      commonjs({
        include: ['./client-aot/node_modules/rxjs/**', './client-aot/node_modules/ng2-bs3-modal/**']
      }),
      uglify()
  ]
};
